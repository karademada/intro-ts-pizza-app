type UserRole = "guest" | "member" | "admin";

export type User = {
  id: number;
  username: string;
  role: UserRole;
};

type UpdatedUser = Partial<User>;

let nextUserId = 1;

const users: User[] = [
  { id: nextUserId++, username: "john_doe", role: "guest" },
  { id: nextUserId++, username: "jane_doe", role: "member" },
  { id: nextUserId++, username: "guest_user", role: "admin" },
];

const updateUser = (id: number, updates: UpdatedUser): void => {
  const user = users.find((user) => user.id === id);
  if (!user) throw new Error("User not found");
  Object.assign(user, updates);
};

const addUser = (newUser: Omit<User, "id">): User => {
  const user: User = { id: nextUserId++, ...newUser };
  users.push(user);
  return user;
};

const fetchUserDetails = (username: string): User => {
  const user = users.find((user) => user.username === username);
  if (!user) throw new Error("User not found");
  return user;
};

addUser({ username: "XXXXXXXXXXXXXX", role: "admin" });
updateUser(1, { role: "admin" });
updateUser(2, { username: "chris_lazantsy" });

console.log({ users });
