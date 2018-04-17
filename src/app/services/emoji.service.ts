import {Injectable} from '@angular/core';

@Injectable()
export class EmojiService {

  emojis = ['😁', '😂', '😃', '😄', '😅', '😆', '😉', '😊', '😋', '😌', '😍', '😏', '😒', '😓',
    '😔', '😖', '😘', '😚', '😜', '😝', '😞', '😠', '😡', '😢', '😣', '😤', '😥', '😨', '😩',
    '😪', '😫', '😭', '😰', '😱', '😲', '😳', '😵', '😷', '😸', '😹', '😺', '😻', '😼', '😽',
    '😾', '😿', '🙀', '🙅', '🙆', '🙇', '🙈', '🙉', '🙊', '🙋', '🙌', '🙍', '🙎', '🙏', '✂',
    '✅', '✈', '✉', '✊', '✋', '✌', '✏', '✒', '✔', '✖', '✨', '✳', '✴', '❄', '❇', '❌', '❎',
    '❓', '❔', '❕', '❗', '❤', '➕', '➖', '➗', '➡', '➰', '🚀', '🚃', '🚄', '🚅', '🚇',
    '🚉', '🚌', '🚏', '🚑', '🚒', '🚓', '🚕', '🚗', '🚙', '🚚', '🚢', '🚤', '🚥', '🚧', '🚨',
    '🚩', '🚪', '🚫', '🚬', '🚭', '🚲', '🚶', '🚹', '🚺', '🚻', '🚼', '🚽', '🚾', '🛀', 'Ⓜ',
    '🅰', '🅱', '🅾', '🅿', '🆎', '🆑', '🆒', '🆓', '🆔', '🆕', '🆖', '🆗', '🆘', '🆙', '🆚',
    '🇩🇪', '🇬🇧', '🇨🇳', '🇯🇵', '🇰🇷', '🇫🇷', '🇪🇸', '🇮🇹', '🇺🇸', '🇷🇺', '🈁', '🈂',
    '🈚', '🈯', '🈲', '🈳', '🈴', '🈵', '🈶', '🈷', '🈸', '🈹', '🈺', '🉐', '🉑', '©', '®',
    '‼', '⁉', '8⃣', '9⃣', '7⃣', '6⃣', '1⃣', '0⃣', '2⃣', '3⃣', '5⃣', '4⃣', '#⃣', '™', 'ℹ', '↔', '↕', '↖',
    '↗', '↘', '↙', '↩', '↪', '⌚', '⌛', '⏩', '⏪', '⏫', '⏬', '⏰', '⏳', '▪', '▫', '▶',
    '◀', '◻', '◼', '◽', '◾', '☀', '☁', '☎', '☑', '☔', '☕', '☝', '☺', '♈', '♉', '♊', '♋', '♌',
    '♍', '♎', '♏', '♐', '♑', '♒', '♓', '♠', '♣', '♥', '♦', '♨', '♻', '♿', '⚓', '⚠', '⚡',
    '⚪', '⚫', '⚽', '⚾', '⛄', '⛅', '⛎', '⛔', '⛪', '⛲', '⛳', '⛵', '⛺', '⛽', '⤴',
    '⤵', '⬅', '⬆', '⬇', '⬛', '⬜', '⭐', '⭕', '〰', '〽', '㊗', '㊙', '🀄', '🃏', '🌀',
    '🌁', '🌂', '🌃', '🌄', '🌅', '🌆', '🌇', '🌈', '🌉', '🌊', '🌋', '🌌', '🌏', '🌑', '🌓',
    '🌔', '🌕', '🌙', '🌛', '🌟', '🌠', '🌰', '🌱', '🌴', '🌵', '🌷', '🌸', '🌹', '🌺', '🌻',
    '🌼', '🌽', '🌾', '🌿', '🍀', '🍁', '🍂', '🍃', '🍄', '🍅', '🍆', '🍇', '🍈', '🍉', '🍊',
    '🍌', '🍍', '🍎', '🍏', '🍑', '🍒', '🍓', '🍔', '🍕', '🍖', '🍗', '🍘', '🍙', '🍚', '🍛',
    '🍜', '🍝', '🍞', '🍟', '🍠', '🍡', '🍢', '🍣', '🍤', '🍥', '🍦', '🍧', '🍨', '🍩', '🍪',
    '🍫', '🍬', '🍭', '🍮', '🍯', '🍰', '🍱', '🍲', '🍳', '🍴', '🍵', '🍶', '🍷', '🍸', '🍹',
    '🍺', '🍻', '🎀', '🎁', '🎂', '🎃', '🎄', '🎅', '🎆', '🎇', '🎈', '🎉', '🎊', '🎋', '🎌',
    '🎍', '🎎', '🎏', '🎐', '🎑', '🎒', '🎓', '🎠', '🎡', '🎢', '🎣', '🎤', '🎥', '🎦', '🎧',
    '🎨', '🎩', '🎪', '🎫', '🎬', '🎭', '🎮', '🎯', '🎰', '🎱', '🎲', '🎳', '🎴', '🎵', '🎶',
    '🎷', '🎸', '🎹', '🎺', '🎻', '🎼', '🎽', '🎾', '🎿', '🏀', '🏁', '🏂', '🏃', '🏄', '🏆',
    '🏈', '🏊', '🏠', '🏡', '🏢', '🏣', '🏥', '🏦', '🏧', '🏨', '🏩', '🏪', '🏫', '🏬', '🏭',
    '🏮', '🏯', '🏰', '🐌', '🐍', '🐎', '🐑', '🐒', '🐔', '🐗', '🐘', '🐙', '🐚', '🐛', '🐜',
    '🐝', '🐞', '🐟', '🐠', '🐡', '🐢', '🐣', '🐤', '🐥', '🐦', '🐧', '🐨', '🐩', '🐫', '🐬',
    '🐭', '🐮', '🐯', '🐰', '🐱', '🐲', '🐳', '🐴', '🐵', '🐶', '🐷', '🐸', '🐹', '🐺', '🐻',
    '🐼', '🐽', '🐾', '👀', '👂', '👃', '👄', '👅', '👆', '👇', '👈', '👉', '👊', '👋', '👌',
    '👍', '👎', '👏', '👐', '👑', '👒', '👓', '👔', '👕', '👖', '👗', '👘', '👙', '👚', '👛',
    '👜', '👝', '👞', '👟', '👠', '👡', '👢', '👣', '👤', '👦', '👧', '👨', '👩', '👪', '👫',
    '👮', '👯', '👰', '👱', '👲', '👳', '👴', '👵', '👶', '👷', '👸', '👹', '👺', '👻', '👼',
    '👽', '👾', '👿', '💀', '💁', '💂', '💃', '💄', '💅', '💆', '💇', '💈', '💉', '💊', '💋',
    '💌', '💍', '💎', '💏', '💐', '💑', '💒', '💓', '💔', '💕', '💖', '💗', '💘', '💙', '💚',
    '💛', '💜', '💝', '💞', '💟', '💠', '💡', '💢', '💣', '💤', '💥', '💦', '💧', '💨', '💩',
    '💪', '💫', '💬', '💮', '💯', '💰', '💱', '💲', '💳', '💴', '💵', '💸', '💹', '💺', '💻',
    '💼', '💽', '💾', '💿', '📀', '📁', '📂', '📃', '📄', '📅', '📆', '📇', '📈', '📉', '📊',
    '📋', '📌', '📍', '📎', '📏', '📐', '📑', '📒', '📓', '📔', '📕', '📖', '📗', '📘', '📙',
    '📚', '📛', '📜', '📝', '📞', '📟', '📠', '📡', '📢', '📣', '📤', '📥', '📦', '📧', '📨',
    '📩', '📪', '📫', '📮', '📰', '📱', '📲', '📳', '📴', '📶', '📷', '📹', '📺', '📻', '📼',
    '🔃', '🔊', '🔋', '🔌', '🔍', '🔎', '🔏', '🔐', '🔑', '🔒', '🔓', '🔔', '🔖', '🔗', '🔘',
    '🔙', '🔚', '🔛', '🔜', '🔝', '🔞', '🔟', '🔠', '🔡', '🔢', '🔣', '🔤', '🔥', '🔦', '🔧',
    '🔨', '🔩', '🔪', '🔫', '🔮', '🔯', '🔰', '🔱', '🔲', '🔳', '🔴', '🔵', '🔶', '🔷', '🔸',
    '🔹', '🔺', '🔻', '🔼', '🔽', '🕐', '🕑', '🕒', '🕓', '🕔', '🕕', '🕖', '🕗', '🕘', '🕙',
    '🕚', '🕛', '🗻', '🗼', '🗽', '🗾', '🗿', '😀', '😇', '😈', '😎', '😐', '😑', '😕', '😗',
    '😙', '😛', '😟', '😦', '😧', '😬', '😮', '😯', '😴', '😶', '🚁', '🚂', '🚆', '🚈', '🚊',
    '🚍', '🚎', '🚐', '🚔', '🚖', '🚘', '🚛', '🚜', '🚝', '🚞', '🚟', '🚠', '🚡', '🚣', '🚦',
    '🚮', '🚯', '🚰', '🚱', '🚳', '🚴', '🚵', '🚷', '🚸', '🚿', '🛁', '🛂', '🛃', '🛄', '🛅',
    '🌍', '🌎', '🌐', '🌒', '🌖', '🌗', '🌘', '🌚', '🌜', '🌝', '🌞', '🌲', '🌳', '🍋', '🍐',
    '🍼', '🏇', '🏉', '🏤', '🐀', '🐁', '🐂', '🐃', '🐄', '🐅', '🐆', '🐇', '🐈', '🐉', '🐊',
    '🐋', '🐏', '🐐', '🐓', '🐕', '🐖', '🐪', '👥', '👬', '👭', '💭', '💶', '💷', '📬', '📭',
    '📯', '📵', '🔀', '🔁', '🔂', '🔄', '🔅', '🔆', '🔇', '🔉', '🔕', '🔬', '🔭', '🕜', '🕝',
    '🕞', '🕟', '🕠', '🕡', '🕢', '🕣', '🕤', '🕥', '🕦', '🕧'];

  constructor() {
  }

  getEmoji(): any {
    return this.emojis;
  }

}
