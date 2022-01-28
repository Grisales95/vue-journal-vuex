export default () => ({
  isLoading: true,
  entries: [
    {
      date: new Date().toDateString(),
      id: crypto.randomUUID(),
      picture: null,
      text: 'Siento el calor de toda tu piel En mi cuerpo otra vez Estrella fugaz, enciende mi sed Misteriosa mujer Con tu amor sensual, cuánto me das.',
    },
    {
      date: new Date().toDateString(),
      id: crypto.randomUUID(),
      picture: null,
      text: 'Ay nos hubieran visto Estábamos allí sentados Frente a frente No podía faltarnos la luna Y hablábamos de todo un poco Y todo nos causaba ',
    },
    {
      date: new Date().toDateString(),
      id: crypto.randomUUID(),
      picture: null,
      text: 'Cómo decirte, Decirte que yo te amo, Decirte cuanto te amo, Pero no encuentro las palabras. Hace unas lunas, Yo siempre sueño contigo, Que siempre sueño contigo, Pero no encuentro las palab ',
    },
  ],
});
