# Weather Bot

Weather Bot automated using GitHub Actions.

## Telegram Bot

Create new bot via BotFather (@bot):

```
/start

/newbot
Weather Bot
github_actions_weather_bot
```

You now have TELEGRAM_TOKEN.

Start conversation with your new bot:

```
/start
Hello?
```

You can find your TELEGRAM_CHAT_ID via Telegram API:

```
https://api.telegram.org/bot**TELEGRAM_TOKEN**/getUpdates
```

You can configure your bot via BotFather:

```
/setabouttext
@github_actions_weather_bot
Weather Bot automated using GitHub Actions.
```
