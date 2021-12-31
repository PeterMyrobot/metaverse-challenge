import Image from 'next/image';
import { useMoralis } from 'react-moralis';

function Avatar({ useName, logoutOnPress }) {
  const { user, logout } = useMoralis();

  return (
    <Image
      className="rounded-full bg-black cursor-pointer"
      src={`https://avatars.dicebear.com/api/pixel-art/${useName || user.get('username')}.svg`}
      onClick={() => logoutOnPress && logout()}
      layout="fill"
    />
  );
}

export default Avatar;
