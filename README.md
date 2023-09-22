# Auto-Emoji 🤖🦾⌨️
Auto-Emoji is a Node.js script that allows you to easily insert emojis into your text by typing simple shortcuts. It listens to your keyboard input and, when a specific sequence is typed, replaces it with the corresponding emoji. This can be a fun and convenient way to quickly add emojis to your text without needing to search for them manually.

## Features
- Type shortcuts like `:smile:` to insert 😀.
- Supports uppercase and lowercase shortcuts.
- Works with or without Caps Lock.
- Reverts to regular typing when not using shortcuts.
- Easy customization with your own emoji shortcuts.

## Getting Started
### Prerequisites
- Node.js installed on your computer.


### Installation
1. Clone the repository:
  ```bash
  git clone https://github.com/yourusername/auto-emoji.git
  ```
2. Navigate to the project directory:
  ```bash
  cd auto-emoji
  ```

3. Install the required npm packages:
  ```bash
  npm install
  ```

## Usage
1. Start Auto-Emoji:
  ```bash
  npm run start
  ```
2. Auto-Emoji will now listen to your keyboard input.
3. To insert emojis, type shortcuts like `:heart:` and they will be replaced with the corresponding emojis. For example, `:heart:` becomes ❤️.
4. Press Enter or Tab to clear any partially typed shortcuts.
5. Clicking the mouse will also clear any partially typed shortcuts.

## Customization

You can customize Auto-Emoji by editing the `emoji-map.js` file. Add your own emoji shortcuts and their corresponding Unicode emoji characters. For example:
```javascript
module.exports = {
  ':thumbs-up:': '👍',
  ':party:': '🎉',
  // Add your own shortcuts and emojis here
};
```

## Acknowledgments
    Auto-Emoji was created using the [lepikjs](https://www.npmjs.com/package/lepikjs) library.

## Contributing
Feel free to contribute to this project by opening issues or creating pull requests.

Enjoy typing emojis with Auto-Emoji! 😄🚀

## Known Issues
- Does not work correctly on Discord.
  - Discord replaces the shortcode before auto-emoji can start deleting.

## Tested on
- ✅ works on Windows 10
