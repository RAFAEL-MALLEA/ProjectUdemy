const MyButton =({text}) => {

    const handleClickButton = (title) => {
        console.log('me diste click 2 ' + title);
    };

    return (
        <button onClick={() => handleClickButton(text)}>
            {text}
        </button>
    )
    
};

export default MyButton;