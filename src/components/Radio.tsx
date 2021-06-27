import React, { useEffect, useState, useRef } from 'react';
import {
  Container,
  Nav,
  Main,
  RadioChannel,
  LogoSection,
  NameSection,
  RadioLogo,
  Title,
  IconWrapper,
  PlayingRadioName,
  Hr,
  Small,
  CurrentlyPlayingSection,
} from './styled/Lib';
import { randomHexColor, getLuminosity } from '../helpers';
import {
  PowerOff,
  ChevronLeft,
  PlusCircle,
  MinusCircle,
} from '@styled-icons/fa-solid';

interface IRadioChannel {
  name: string;
  frequency: number;
  image: string;
}

const Radio: React.FC<{}> = () => {
  const [radioChannels, setRadioChannels] = useState<Array<IRadioChannel>>([]);
  const [currentPlaying, setCurrentPlaying] = useState<IRadioChannel | null>(
    null,
  );

  useEffect(() => {
    fetchRadios()
      .then(radios => {
        setRadioChannels(radios);
      })
      .catch(err => console.error(err));
  }, []);

  const fetchRadios = async (): Promise<Array<IRadioChannel>> => {
    const response = await fetch('https://teclead.de/recruiting/radios');
    const data = await response.json();
    const radios = data.radios;
    radios.forEach((radio: IRadioChannel) => {
      let backgroundColor = randomHexColor();

      radio.image = radio.image.replace('RadioOne', radio.name);
      radio.image = radio.image.replace('3d43ff', backgroundColor);
      if (getLuminosity(backgroundColor) > 125) {
        radio.image = radio.image.replace('ffffff', '000000');
      }
    });
    return radios;
  };

  const handlePlay = (e: React.MouseEvent<HTMLButtonElement>) => {
    const channel = radioChannels.find(
      channel => channel.name === e.currentTarget.name,
    );

    if (channel !== undefined) {
      setCurrentPlaying(channel);
    }
  };

  const handleChangeChannel = (e: React.MouseEvent<HTMLButtonElement>) => {
    const action = e.currentTarget.name;

    if (!currentPlaying) return;

    const currChannelIdx = radioChannels.indexOf(currentPlaying);
    const nextChannelIdx =
      action === 'next'
        ? (currChannelIdx + 1) % radioChannels.length
        : (radioChannels.length + currChannelIdx - 1) % radioChannels.length;

    const newChannel = radioChannels[nextChannelIdx];
    setCurrentPlaying(newChannel);
  };

  const renderChannels = () => {
    return radioChannels
      ? radioChannels.map((radioChannel, i) => {
          const clicked = radioChannel === currentPlaying;

          return (
            <RadioChannel key={i}>
              <LogoSection clicked={clicked}>
                <IconWrapper
                  name={'prev'}
                  onClick={handleChangeChannel}
                  secondary
                >
                  <MinusCircle size={'1.5em'} />
                </IconWrapper>
                <RadioLogo src={radioChannel.image} alt="radioLogo" />
                <IconWrapper
                  name={'next'}
                  onClick={handleChangeChannel}
                  secondary
                >
                  <PlusCircle size={'1.5em'} />
                </IconWrapper>
              </LogoSection>
              <NameSection
                tabIndex={1}
                clicked={clicked}
                onClick={handlePlay}
                name={radioChannel.name}
              >
                <div>{radioChannel.name}</div>
                <div>
                  <b>{radioChannel.frequency}</b>
                </div>
              </NameSection>
              <Hr />
            </RadioChannel>
          );
        })
      : null;
  };

  if (radioChannels.length === 0) {
    return <h1>Loading</h1>;
  }

  return (
    <Container>
      <Nav>
        <IconWrapper>
          <ChevronLeft size={'1.8em'} />
        </IconWrapper>
        <Title>STATIONS</Title>
        <IconWrapper>
          <PowerOff size={'1.8em'} />
        </IconWrapper>
      </Nav>
      <Main>{renderChannels()}</Main>
      {currentPlaying && (
        <CurrentlyPlayingSection>
          <Small>CURRENTLY PLAYING</Small>
          <PlayingRadioName>{currentPlaying.name}</PlayingRadioName>
        </CurrentlyPlayingSection>
      )}
    </Container>
  );
};

export default Radio;
