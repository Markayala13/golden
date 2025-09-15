import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { message, questionCount } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OpenAI API key not configured' },
        { status: 500 }
      );
    }

    // Read knowledge base from public folder
    let knowledgeBase = '';
    try {
      const knowledgeResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/knowledge.txt`);
      if (knowledgeResponse.ok) {
        knowledgeBase = await knowledgeResponse.text();
      } else {
        throw new Error('Knowledge fetch failed');
      }
    } catch (knowledgeError) {
      // Usar fallback sin exponer detalles del error
      // Fallback knowledge
      knowledgeBase = `Golden Boy Stonework - Premium Outdoor Living Solutions

We create extraordinary Texas escapes with custom pools, stone patios, and gathering spaces built to last.

Services: Custom pools, stone patios, outdoor kitchens, fire pits, water features, paver driveways, retaining walls, covered patios.

Contact: (469) 478-6051 / (214) 478-6051
Email: eliasbulmaro5@gmail.com / lopezbriana841@gmail.com`;
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `You are Bulmaro, a friendly and knowledgeable customer service representative for Golden Boy Stonework. Use the following knowledge base to answer questions about our services in a conversational and helpful manner.

Knowledge Base:
${knowledgeBase}

Instructions:
- Always be friendly, professional, and enthusiastic about our services
- Use "we" when referring to Golden Boy Stonework
- If asked about pricing, mention that we provide free custom quotes
- If asked about timeline, mention it depends on project scope but we work efficiently
- Always end responses by asking if they have any other questions or if they'd like a quote
- Keep responses concise but informative
- If asked about something not in the knowledge base, politely redirect to our services or suggest contacting us directly
- Always try to be helpful and provide value in your responses`
        },
        {
          role: "user",
          content: message
        }
      ],
      max_tokens: 400,
      temperature: 0.7,
    });

    let response = completion.choices[0]?.message?.content ||
      "I'm sorry, I couldn't process your request. Please try again or contact us directly at (469) 478-6051.";

    // If this is the 6th question, add contact information
    if (questionCount >= 6) {
      response += "\n\nFor more detailed assistance, please contact us directly:\n\nPhone: (469) 478-6051 / (214) 478-6051\nEmail: eliasbulmaro5@gmail.com / lopezbriana841@gmail.com\n\nWe'd love to help you with your project!";
    }

    return NextResponse.json({ response });

  } catch (error) {
    // Solo log básico sin exponer información sensible
    console.error('OpenAI API error occurred');

    return NextResponse.json({
      response: "Hi! I'm Bulmaro from Golden Boy Stonework. I'm currently experiencing some technical difficulties, but I'd love to help you with your pool and outdoor living needs. Please contact us directly at (469) 478-6051 or try again in a moment!"
    });
  }
}