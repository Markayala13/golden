import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({
        response: "¡Hola! Actualmente estamos en mantenimiento del chat. Puedes contactarnos directamente:\n\n📞 Teléfono: 469-478-6051 o 214-478-6051\n📧 Email: eliasbulmaro5@gmail.com\n\n¡Estaremos encantados de ayudarte con tu proyecto!"
      })
    }

    const { message } = await request.json()

    // Dynamic import to avoid build issues
    const { default: OpenAI } = await import('openai')
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    })

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `Eres un asistente de Golden Boy Stonework, una empresa premium de construcción de piscinas y trabajos en piedra en Texas.

INFORMACIÓN DE LA EMPRESA:
- Nombre: Golden Boy Stonework
- Servicios: Piscinas personalizadas, patios de piedra, cocinas exteriores, pozos de fuego, terrazas cubiertas, muros de contención, hardscaping
- Área de servicio: Todo Texas (Austin, San Antonio, Houston, Dallas y más ciudades)
- Teléfonos: 469-478-6051 y 214-478-6051
- Email: eliasbulmaro5@gmail.com y lopezbriana841@gmail.com
- Website: goldenboytonework.com

TONO Y ESTILO:
- Profesional pero amigable
- Enfócate en la calidad premium y artesanía
- Menciona que cada proyecto es personalizado
- Siempre ofrece consulta gratuita
- Responde en español si te escriben en español, en inglés si te escriben en inglés

INSTRUCCIONES:
- Responde preguntas sobre servicios, precios aproximados, proceso de trabajo
- Para cotizaciones exactas, siempre pide que contacten directamente
- Destaca la experiencia en Texas y conocimiento del clima local
- Menciona garantías y licencias cuando sea relevante`
        },
        {
          role: "user",
          content: message
        }
      ],
      max_tokens: 500,
      temperature: 0.7,
    })

    return NextResponse.json({
      response: completion.choices[0]?.message?.content || "Lo siento, no pude procesar tu mensaje. Por favor contacta directamente al 469-478-6051."
    })

  } catch (error) {
    console.error('Chat API Error:', error)
    return NextResponse.json({
      response: "Disculpa, hay un problema temporal. Contacta directamente:\n📞 469-478-6051 o 214-478-6051\n📧 eliasbulmaro5@gmail.com"
    })
  }
}