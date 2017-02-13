require('./style.less');

module.exports = {
    onInput (input) {
        this.state = {
            color: input.color,
            songUrl: input.songUrl
        };
    }
};
