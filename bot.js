const { Bot } = require('grammy');

const bot = new Bot('7876677867:AAEY565sL6C17g-Oey0J3Rxze0yAzdra22I');


bot.command('start', (ctx) => {
    ctx.reply('Привет! Я простой бот. Напиши /help, чтобы узнать, что я умею!');
});

bot.command('help', (ctx) => {
    ctx.reply('/start - приветствие\n/help - помощь\n/echo - повторить сообщение\n/joke - рассказать шутку');
});

bot.command('echo', (ctx) => {
    const message = ctx.message.text.split(' ').slice(1).join(' ');
    ctx.reply(message || 'Пожалуйста, введите сообщение для повторения');
});

bot.command('joke', async (ctx) => {
    const jokes = [
        { text: '<b>- Вчера долго пыталась объяснить бабуле, что работаю программистом. \n- Удалось? \n- Короче, сошлись на том, что чиню телевизоры и развожу мышей.</b>', parse_mode: 'HTML' },
        { text: '`- Почему ваши дети всё время ссорятся? \n- Конфликт версий`', parse_mode: 'MarkdownV2' },
        { text: '<i>- Программисту нужно попасть на двенадцатый этаж. Он заходит в лифт, нажимает кнопку «1», затем «2» и долго ещё безуспешно ищет глазами клавишу Enter...</i>', parse_mode: 'HTML' }
    ];

    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];

    await ctx.reply(randomJoke.text, { parse_mode: randomJoke.parse_mode });
});

bot.start();
console.log('Бот запущен...');

