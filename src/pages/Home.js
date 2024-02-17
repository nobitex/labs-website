import Layout from "../Components/Layout";
import LabsText from "../Components/LabsText";
import RecentPosts from "../Components/RecentPosts";
import Categories from "../Components/Categories";
import Modal from "../Components/Modal";
const Home = () => {
  return (
    <Layout>
      <div>
        <div className="my-12">
          <LabsText />
          <h1 className="text-6xl font-bold text-center lg:hidden">
            Nobitex Labs
          </h1>
        </div>
        <div className="flex justify-center ">
          <div className="md:mx-48 mx-3 max-w-[1152px]">
            <div className="mt-11  mx-auto  text-black">
              <h1 className="text-center bg-[#00aaaa] py-2">Intro</h1>
              <div className="bg-[#bbbbbb] min:h-56 py-2">
                <div className="m-2 border border-black p-5">
                  <p>
                    Nobitex Labs is a group of researchers and builders uniting
                    to experiment and create new applications of cryptographic
                    systems. We design protocols and build software that solve
                    open problems of the blockchain technology.
                  </p>
                  <br></br>
                  <p>
                    Nobitex Labs is a place where Satoshi's dream will come
                    true!
                  </p>
                  <div className="text-center mb-6">
                    <Modal />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6   text-center text-black">
              <h1 className="text-center bg-[#00aaaa] py-2">Links</h1>
              <div className="bg-[#bbbbbb] min:h-56 py-2">
                <div className="m-2 border border-black p-5">
                  <p className="my-3">
                    Join our
                    <a
                      className="underline my-2 hover:bg-black hover:text-white"
                      href="https://discord.gg/XuBps588Xp"
                    >
                      {" "}
                      Discord server
                    </a>
                    !
                  </p>
                  <p className="my-3">
                    You can find some of our projects on{" "}
                    <a
                      className="underline my-2 hover:bg-black hover:text-white"
                      href="https://github.com/nobitex"
                    >
                      Nobitex's GitHub
                    </a>
                    !
                  </p>
                  <p className="my-3">
                    We are proudly the authors of Ethereum's{" "}
                    <a
                      className="underline my-2 hover:bg-black hover:text-white"
                      href="https://eip7503.org"
                    >
                      EIP-7503
                    </a>
                    !
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6    text-black">
              <h1 className="text-center bg-[#00aaaa] py-2">Research Topics</h1>
              <div className="grid grid-flow-row lg:grid-cols-3 gap-3">
                <div>
                  <p className="bg-[#00aa00] text-center">Scalability</p>
                  <p className="bg-[#bbbbbb] p-3.5">
                    We care about building systems that do not break on high
                    loads. We achieve this by applying various cryptographic
                    protocols and tools including Zero-Knowledge Proofs.
                  </p>
                </div>
                <div>
                  <p className="bg-[#aa0000] text-center">Privacy</p>
                  <p className="bg-[#bbbbbb] p-3.5">
                    We care about people's privacy. We always seek solutions
                    that need minimal amount of data gathered from users, giving
                    them maximal confidentiality.
                  </p>
                </div>
                <div>
                  <p className="bg-[#aa5500] text-center">Decentralization</p>
                  <p className="bg-[#bbbbbb] p-3.5">
                    We care about balanced distribution of power. We believe
                    that true privacy and freedom of transaction comes from true
                    decentralization.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-11   text-black">
              <h1 className="text-center bg-[#00aaaa] py-2">Learn</h1>
              <div className="bg-[#bbbbbb] min:h-56 py-2">
                <div className="m-2 border border-black p-5">
                  <p className="text-center">
                    We have recorded a great series of videos teaching you the
                    fundamentals of Cryptography and Blockchain technology! Find
                    them here:
                  </p>
                  <ol className="list-decimal pl-8">
                    <li>
                      <a
                        className="underline hover:bg-black hover:text-white"
                        href="https://www.youtube.com/watch?v=UmCCEdzYHBE"
                      >
                        Bitcoin and Proof-of-Work
                      </a>
                    </li>
                    <li>
                      <a
                        className="underline hover:bg-black hover:text-white"
                        href="https://www.youtube.com/watch?v=s_x68YFziuo"
                      >
                        Ethereum and Web3
                      </a>
                    </li>
                    <li>
                      <a
                        className="underline hover:bg-black hover:text-white"
                        href="https://www.youtube.com/watch?v=FSaEptuiy_o"
                      >
                        Zero-Knowledge Proofs
                      </a>
                    </li>
                    <li>
                      <a
                        className="underline hover:bg-black hover:text-white"
                        href="https://www.youtube.com/watch?v=1e0630R61Es"
                      >
                        Decentralized Finance (DeFi)
                      </a>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="mt-11  text-black">
              <h1 className="text-center bg-[#00aaaa] py-2">Our work</h1>
              <div className="grid  lg:grid-cols-2 lg:grid-rows-1 grid-rows-2 gap-5 mt-3">
                <Categories />
                <RecentPosts />
              </div>
            </div>
          </div>
      
        </div>    
      </div>
    </Layout>
  );
};

export default Home;
