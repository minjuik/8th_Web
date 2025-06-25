import { useEffect, useState } from "react";

interface RoomListProps {
  onEnterRoom: (room: string) => void;
}

export default function RoomList({ onEnterRoom }: RoomListProps) {
  // 서버에서 받아온 방 목록
  const [rooms, setRooms] = useState<string[]>([]);
  // 새 방 이름 입력 상태
  const [newRoom, setNewRoom] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/rooms") // .env에 넣어 관리하는게 더 안정적
      .then((response) => response.json())
      .then(setRooms);
  }, []);

  const handleEnter = (room: string) => {
    onEnterRoom(room);
  };

  return (
    <div>
      <h1>다리미톡</h1>

      {/* 서버에서 받아온 방 리스트 */}
      <ul>
        {rooms.map((room) => (
          <li key={room}>
            {room}
            <button onClick={() => handleEnter(room)}>입장</button>
          </li>
        ))}
      </ul>

      <input value={newRoom} onChange={(e) => setNewRoom(e.target.value)} />
      <button onClick={() => handleEnter(newRoom)}>방 생성 / 입장</button>
    </div>
  );
}
