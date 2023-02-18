import Image from "next/image";

function QuizCard(params) {
  return (
    <div className="w-[30%] h-[40%]  hover:shadow-2xl p-3 rounded-md overflow-hidden">
      <Image
        alt=""
        src={"/img/img1.jpg"}
        width={700}
        height={700}
        sizes={"100vw"}
        style={{
          width: "100%",
          height: "auto",
        }}
        className="hover:scale-125 "
      />
    </div>
  );
}
export default QuizCard;
