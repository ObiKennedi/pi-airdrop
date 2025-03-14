import "./globals.scss"

interface BoardProps {
    header: string;
    writeUp: string;
}

const Board: React.FC<BoardProps> = ({ header, writeUp }) => {
    return (
        <div className="board">
            <h2>{header}</h2>
            <p>{writeUp}</p>
        </div>
    );
}

export default Board;
