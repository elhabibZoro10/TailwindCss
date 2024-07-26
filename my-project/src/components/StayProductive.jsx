const StayProductive = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-[30px] place-items-center ">
        <div>
          <img
            src="/src//assets/images/illustration-stay-productive.png"
            alt="stay-Productive-img"
          />
        </div>
        <div className="text-white">
          <h3 className="font-medium text-[35px] leading-[50px]">
            Stay productive,
            <br />
            wherever you are
          </h3>
          <div className="my-[15px] font-normal text-sm ">
            <p className="mb-[15px]">
              Le Lorem Ipsum est simplement du faux texte employé dans la
              composition et la mise en page avant impression. Le Lorem Ipsum
              est le faux texte
            </p>
            <p>
              Le Lorem Ipsum est simplement du faux texte employé dans la
              composition et la mise en page avant impression. Le Lorem Ipsum
              est le faux texte
            </p>
          </div>
          <a
            href="/"
            className="text-primary  hover:text-[#42b0d1] border-b-2 border-primary border-solid transition-colors duration-200 pb-[5px ] flex items-center gap-[15px] w-fit "
          >
            See how Fylo works
            <img
              src="/src//assets/images/icon-arrow.svg"
              alt="arrow-img"
              className="w-[20px] h-[20px] object-contain animate-[moveRigth_1s_ease-in-out_infinite]"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default StayProductive;
