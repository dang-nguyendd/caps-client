interface Command {
  group: string;
  name: string;
  shortcut: string;
}

interface ICommandProps {
  commands: Command[];
  group: string;
}
