/**
 * Copyright (c) 2020 - Jackk <jack@mechagaming.com>, All rights reserved.
 */

import React from "react";
import { keyframes } from "styled-components";
import tw, { css, styled } from "twin.macro";

const titleAnimation = keyframes`
  from {
    width: 100%;
  }

  to {
    width: 0%;
  }
`;

const subtitleAnimation = keyframes`
  from {
    transform: translateY(1.2rem);
    opacity: 0;
  }

  to {
    transform: translateY(0rem);
    opacity: 1;
  }
`;

const buttonAnimation = keyframes`
  from {
    opacity: 0;
    transform: rotateY(45deg);
  }

  to {
    opacity: 1;
    transform: rotateY(0deg);
  }
`;

const Title = styled.h2(() => [
  tw`text-2xl font-medium text-center relative`,
  css`
    font-family: "Eczar", serif;

    &::before {
      position: absolute;
      content: "";
      background-color: rgb(4, 4, 5);
      transform-origin: 50% 100%;
      right: 0;
      height: 100%;
      animation: ${titleAnimation} 1.8s cubic-bezier(0.76, 0, 0.24, 1) both;
    }
  `,
]);

const Subtitle = styled.h2(() => [
  tw`text-base text-center`,
  css`
    font-family: "Eczar", serif;
    color: rgb(210, 210, 210);
    animation: ${subtitleAnimation} 1.8s ease both;
    animation-delay: 0.5s;
  `,
]);

const ButtonLink = styled.a(({ delay }) => [
  tw`block text-xl`,
  css`
    font-family: "Rokkitt", serif;

    color: rgb(220, 220, 220);

    animation: ${buttonAnimation} 1.3s cubic-bezier(0.32, 0, 0.67, 0) both;
    animation-delay: ${delay + 0.65}s;

    &:hover {
      color: white;
    }
  `,
]);

const Button: React.FC<{ href: string; delay: number }> = ({
  href,
  delay,
  children,
}) => {
  return (
    <div tw="px-1">
      <ButtonLink delay={delay} href={href}>
        {children}
      </ButtonLink>
    </div>
  );
};

const Index = () => {
  return (
    <div tw="absolute w-full h-full top-0 left-0">
      <div tw="flex flex-col h-full items-center justify-center">
        <section id="title">
          <Title>mechagaming.com</Title>
          <Subtitle>quality game servers, coming soon</Subtitle>
        </section>
        <section id="nav" tw="flex justify-center mt-4">
          <Button delay={1} href="https://steamcommunity.com/groups/mechagg">
            [steam]
          </Button>
          <Button delay={2} href="https://github.com/mechagg">
            [src]
          </Button>
          <Button delay={1.5} href="https://discord.gg/NpdynEJy9h">
            [discord]
          </Button>
        </section>
      </div>
    </div>
  );
};

export default Index;
