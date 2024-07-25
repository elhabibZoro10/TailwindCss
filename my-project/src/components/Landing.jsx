const Landing = () => {
  return (
    <section className="bg-[#1c2230]">
      <div className="container">
        <div className="element-center flex-col pt-[200px] ">
          <div className="w-[750px] max-w-full ">
            <img
              className="w-full h-fit"
              src="/src/assets/images/illustration-intro.png"
              alt="landing-img"
            />
          </div>
          <div className="text-white text-center">
            <h1 className="text-[30px] md:text-[40px] font-semibold md-[15px] ">
              All your files one secure location
              <br />
              accessiblee anywhere.
            </h1>
            <p className="font-normal text-lg px-[15px] md:w-[600px] max-w-full md:mx-auto ">
              Le Lorem Ipsum est simplement du faux texte employé dans la
              composition et la mise en page avant impression. Le Lorem Ipsum
              est le faux texte standard
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
