import { User } from "../core/types/user.types";

export class UserModel {
    private users: User[] = [
        { id: 1, name: 'User 1' },
        { id: 2, name: 'User 2' },
    ];

    public getAllUsers(): User[] {
        return this.users;
    }

    public getUserById(id: number): User | undefined {
        return this.users.find(user => user.id === id);
    }

    public createUser(user: User): void {
        this.users.push(user);
    }

    public updateUser(id: number, updatedUser: Partial<User>): void {
        const user = this.users.find(user => user.id === id);
        if (user) {
            Object.assign(user, updatedUser);
        }
    }

    public deleteUser(id: number): void {
        this.users = this.users.filter(user => user.id !== id);
    }
}