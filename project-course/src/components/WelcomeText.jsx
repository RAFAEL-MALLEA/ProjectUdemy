const WelcomeText = ({users}) => {
    if(users) {
        return (
                'Bienvenido'
        );
    }
    return (
            'Offline'
    );
};
export default WelcomeText;