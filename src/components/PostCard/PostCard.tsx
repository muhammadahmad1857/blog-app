import { Avatar } from "@nextui-org/avatar";

interface PropsType {
  postData: {
    body: string;
    id: number;
    title: string;
    userId: number;
  };
}

export const PostCard = (props: PropsType) => {
  const { postData } = props;

  return (
    <div className="flex h-full w-full justify-center ">
      <div className="max-w-sm h-full shadow-lg shadow-gray-700 rounded-3xl bg-white m-4 hover:shadow-xl hover:shadow-gray-700 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between">
        {/* Post Image */}
        <div className="p-4">
          <Avatar
            className="rounded-3xl"
            radius="lg"
            src={`https://i.pravatar.cc/150?u=${postData.id}`}
          />
        </div>

        {/* Post Content */}
        <div className="px-6 py-4 flex-grow">
          {/* Post Title */}
          <div className="font-bold text-xl mb-2 text-black">
            {postData.title}
          </div>
          {/* Post Body */}
          <p className="text-gray-700 text-base">{postData.body}</p>
        </div>
      </div>
    </div>
  );
};
