let welcomeText: string = "Willkommen im TypeScript-Kurs";

let participants: string[] = ["Lars", "Sophie", "Ahmed", "Marzio", "Brigitte"];

function greetEveryone(greeting: string, participants: string[]): string {
    let message = "";
    let blackList: string[] = ["Lars"]
    participants.forEach((participant) => {
        if (blackList.includes(participant)) return
        message += greeting + " " + participant + "\n";

    });
    return message;
}

console.log(greetEveryone(welcomeText, participants));

// AB HIER 2


function addToParticipants(name: string, participants: string[]): string[] {
    participants.push(name);
    return participants;
}

function removeFromParticipants(name: string, participants: string[]): string[] {
    const index: number = participants.indexOf(name);
    if (index > -1) {
        participants.splice(index, 1);
    }
    return participants;
}

participants = addToParticipants("Chad", participants);

console.log(greetEveryone("Hi", participants));

participants = removeFromParticipants("Marzio", participants);

console.log(greetEveryone("Hi", participants));

export { };
