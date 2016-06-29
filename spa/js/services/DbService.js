
const DB = {
    "mailboxes": [{"title": "Spam"},
        {"title": "Trash"},
        {"title": "Drafts"},
        {"title": "Sent Mail"},
        {"title": "Inbox"}],
    "letters": [{
        "mailbox": "577106a66baa8d7d1bfe5dc6",
        "subject": "job",
        "body": "Lorem ipsum dolor sit amet, ex perpetua convenire est, mei primis atomorum ex, aliquando urbanitas persecuti ei duo.",
        "to": "test@mail.com"},
        {"mailbox": "577106a66baa8d7d1bfe5dc6",
            "subject": "job2",
            "body": "Lorem ipsum dolor sit amet, ex perpetua convenire est, mei primis atomorum ex, aliquando urbanitas persecuti ei duo.",
            "to": "test2@mail.com"},
        {"mailbox": "577106c16baa8d7d1bfe5dc7",
            "subject": "job3",
            "body": "Lorem ipsum dolor sit amet, ex perpetua convenire est, mei primis atomorum ex, aliquando urbanitas persecuti ei duo.",
            "to": "test3@mail.com"},
        {"mailbox": "577106c16baa8d7d1bfe5dc7",
            "subject": "job4",
            "body": "Lorem ipsum dolor sit amet, ex perpetua convenire est, mei primis atomorum ex, aliquando urbanitas persecuti ei duo.",
            "to": "test4@mail.com"},
        {"mailbox": "577106cc6baa8d7d1bfe5dc8",
            "subject": "job5",
            "body": "Lorem ipsum dolor sit amet, ex perpetua convenire est, mei primis atomorum ex, aliquando urbanitas persecuti ei duo.",
            "to": "test5@mail.com"},
        {"mailbox": "577106d46baa8d7d1bfe5dc9",
            "subject": "job6",
            "body": "Lorem ipsum dolor sit amet, ex perpetua convenire est, mei primis atomorum ex, aliquando urbanitas persecuti ei duo.",
            "to": "test6@mail.com"},
        {"mailbox": "577106d46baa8d7d1bfe5dc9",
            "subject": "job7",
            "body": "Lorem ipsum dolor sit amet, ex perpetua convenire est, mei primis atomorum ex, aliquando urbanitas persecuti ei duo.",
            "to": "test6@mail.com"},
        {"mailbox": "577106d46baa8d7d1bfe5dc9",
            "subject": "job8",
            "body": "Lorem ipsum dolor sit amet, ex perpetua convenire est, mei primis atomorum ex, aliquando urbanitas persecuti ei duo.",
            "to": "test6@mail.com"},
        {"mailbox": "577106df6baa8d7d1bfe5dca",
            "subject": "job10",
            "body": "Lorem ipsum dolor sit amet, ex perpetua convenire est, mei primis atomorum ex, aliquando urbanitas persecuti ei duo.",
            "to": "test10@mail.com"},
        {"mailbox": "577106df6baa8d7d1bfe5dca",
            "subject": "job11",
            "body": "Lorem ipsum dolor sit amet, ex perpetua convenire est, mei primis atomorum ex, aliquando urbanitas persecuti ei duo.",
            "to": "test11@mail.com"}],
    "tasks": [],
    "users": [{
        "fullName": "Натальина Наталья",
        "avatarUrl": "https://randomuser.me/api/portraits/thumb/women/7.jpg",
        "birthdate": "1990-07-03T00:00:00.000Z",
        "gender": "F",
        "address": "ул. Лермонтова, 59",
        "email": "ivanov@mail.ru"},
        {"fullName": "Петров Петр",
            "avatarUrl": "https://randomuser.me/api/portraits/thumb/men/7.jpg",
            "birthdate": "1957-01-14T00:00:00.000Z",
            "gender": "M",
            "address": "ул.Пушкинская, 13",
            "email": "ivanov@mail.ru"},
        {"fullName": "Иванов Иван",
            "avatarUrl": "https://randomuser.me/api/portraits/thumb/men/57.jpg",
            "birthdate": "1976-10-10T00:00:00.000Z",
            "gender": "M",
            "address": "ул. Звенигородская, 47б",
            "email": "ivanov@mail.ru"
        }]
};


export default class DbService {
    constructor() {
        
    }
    
    get getDb() {
        return DB;
    }
}