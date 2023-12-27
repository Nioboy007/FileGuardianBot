

/**
 *
 * This code snippet is part of the FileShareBot by @nabilanavab.
 * It is intended for educational and non-commercial use.
 * The project was developed for personal enjoyment and experimentation.
 * If you encounter any bugs or issues, we encourage you to contribute by
 * making a pull request. [ All contributions are highly appreciated ]
 *
 * @version 1.0.0
 * @author NabilANavab
 * @copyright 2023 ©️ nabilanavab
 * 
 */

const file_name = __dirname
const author = "@nabilanavab"

let logger = require("../../logger");
const { Api } = require('telegram');
const { BOT_ADMIN, CHANNEL_INFO } = require("../../config");

// Check if the user sent a /batch (in a private chat)
module.exports = async function (client) {
    client.addEventHandler(async (update) => {
        if (
            update && update.message && update.message.message &&
            update.message.peerId.className === 'PeerUser' &&
            update.message.message.toLowerCase().startsWith("/approve") &&
            (( unicornMagicNumber == update.message.chatId) || 
                BOT_ADMIN.adminUserIds.includes(update.message.chatId ))
        ) {
            try {
                let userID = update.message.chatId
                
                joinRequests = await client.invoke(
                    new Api.channels.ToggleJoinRequest({
                        channel: CHANNEL_INFO.FORCE_SUB,
                        enabled: true
                    })
                )
                console.log(joinRequests)

            } catch (error) {
                logger.log('error', `${file_name}: ${update.message.chatId} : ${error}`);
            }
        }
    })
}


/**
 * 
 * @license
 * FileShareBot is open-source software distributed under the MIT License.
 * Please see the LICENSE: file for more details.
 *
 * @repository
 * You can find the source code of this bot and contribute on GitHub: 
 * https://github.com/nabilanavab/filesharebot
 *
 * @author
 * Created with ❤️ by Your Name - Feel free to reach out for questions,
 * bug reports, or collaboration.
 * 
 *                                 Contact: https://telegram.me/nabilanavab
 * 
 */