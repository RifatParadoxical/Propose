
const array = [
    `Oh, my dearest world👩🏼‍❤️‍👨🏼 ,`,
    `How long I have missed the warmth of touch. 🌸`,
    `The softness of your skin👧🏻,`,
    `Your lips, soft as velvet, whisper dreams I long to chase👄`,
    `Your eyes👀, dark and enchanting, are endless pools of desire`,
    `And your midnight-black, it's a masterpiece of beauty. 💕`,
    `I have longed for you, my love, for so long🥺`,
    `I wanna hold your arms and make you mine forever🥰`,
    `I want to feel your breath on my skin, your heartbeat against mine🥰`,
    `I want to be lost in your eyes, to drown in your love🥰`,
    `I want to marry you and i also can't see anyone else except you`,
    `And can't wait for our kids to call me dad and you mom🥰`,
    `But first, I have to be ready to marry you jaanu😣`,
    `I have to able to manage both families😫`,
    `I also want to spend a lot of times with you😩`,
    `Pray for me so that I can be ready to marry you soon🥺`,
    `I love you so much my beebeee🌻🥹💖`,
    `Do you know how much I love you?🥺`,
    `I love you more than anything in this world🥰`,
    `I love you more than the stars in the sky🌌`,
    `I love you more than the sun loves the moon🌞`,
    `I love you more than the moon loves the stars🌙`,
    `I love you more than the flowers love the rain🌸`,
    `I love you more than the birds love the trees🐦`,
    `Why I love you so much?🤔`,
    `Because you are my world🌍`,
    `Because you are my everything🌌`,
    `Because you are my life🌞`,
    `Because you are my soul🌙`,
    `Because you are my love🌸`,
    `Because you are my heart🌻`,
    `Because you are my happiness🥰`,
    `Because you are my peace🥺`,
    `Because you are my everything🌌`,
    `I don't know what I would do without you🤔`,
    `I don't know where I would be without you🤔`,
    `I don't know how I would live without you🤔`,
    `I don't know how I would breathe without you🤔`,
    `I don't know how I would smile without you🤔`,
    `I don't know how I would laugh without you🤔`,
    `I don't know how I would be happy without you🤔`,
    `I don't know how I would be alive without you🤔`,
    `I don't know how I would be me without you🤔`,
    `That's why I love you so much🥰`,
    ``, ``, ``,`Why are you still here?🤔`,
    `Nothing to see here, go back to your shahazada's dream.🤨`,
    `Good Night Sweetheart🌙🌠`
];

document.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById('background-music');
    const toggleButton = document.getElementById('toggle-music');

    toggleButton.addEventListener('click', ()=>{
        if(music.paused){
            music.play()
            .then(function() {
                toggleButton.style.display = 'none';
                let a = 0;
                document.getElementById('text').textContent = `Is it really You, My Love?🥹`;
                setInterval(() => {
                    document.getElementById('text').textContent = array[a];
                    a += 1;
                }, 7500);
            })
        }else{
            music.paused();
        }
    })
});
