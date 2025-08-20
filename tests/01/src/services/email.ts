async function getBaseEmail(senderName: string): Promise<string> {
    let base = 'Olá, ' + senderName + ', gostaria de me inscrever em uma vaga';
    base += "\n estou deixando o meu currículo";
    return base;
}

export {getBaseEmail};