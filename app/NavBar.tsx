import { Container, Flex, Heading, Text } from "@radix-ui/themes";
// import { ThemePanel } from "@radix-ui/themes";

const NavBar = () => {
  return (
    <Flex className="justify-center items-center mb-10" direction="column">
      <Heading
        size={"8"}
        className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-500"
      >
        检索增强的文档智能系统
      </Heading>
      <Heading size={"3"}>上传您的文档并通过检索增强生成与他们对话</Heading>
    </Flex>
  );
};

export default NavBar;
