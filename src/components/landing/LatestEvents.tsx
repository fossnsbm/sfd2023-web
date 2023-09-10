import Button from "../Button";
import Container from "../Container";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { TbChevronRight } from "react-icons/tb";

const LatestEvents = () => {
  const router = useRouter();
  const goToRegister = () => {
    router.push("/events/sfd-2023");
  };

  return (
    <div className="text-white">
      <Container>
        <p className="text-3xl my-14 md:my-10 md:text-4xl md:leading-[3.75rem] font-medium text-center md:text-left text-white mb-5">
          Latest Events
        </p>
        <div className="md:flex">
          <div className="max-w-sm border border-white rounded-lg shadow  mx-auto">
            <Image
              className="rounded-t-lg bg-black"
              width={1172}
              height={100}
              src="/images/hero-logo.webp"
              alt="SFD Logo"
            />

            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 ">
                  SFD 2023
                </h5>
              </a>
              <p className="mb-5 font-normal text-gray-700 ">
                Software Freedom Day is an annual, world-wide celebration of
                free software. The FOSS Community of NSBM Green University is
                ready to celebrate SFD{"'"}23 on September 18, 2023, at the
                Computing Faculty of NSBM with 200+ participants.
              </p>
              <Button
                label="Read More"
                onClick={goToRegister}
                icon={TbChevronRight}
              />
            </div>
          </div>
          <div className="max-w-sm border gradient-border rounded-lg shadow  mx-auto relative mt-10 md:mt-0">
            <Image
              className="rounded-t-lg w-full h-full opacity-10"
              width={1172}
              height={100}
              src="/images/hacktoberfest-logo.webp"
              alt="Hacktoberfest Logo"
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <p className="text-gray text-4xl font-bold absolute text-center">
                Coming Soon
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LatestEvents;
