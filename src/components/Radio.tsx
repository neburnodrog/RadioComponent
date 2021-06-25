import React, { useEffect, useState } from 'react';
import {
  Container,
  Nav,
  Main,
  RadioChannel,
  Title,
  IconWrapper,
  Hr,
} from './styled/Lib';
import { PowerOff, ChevronLeft } from '@styled-icons/fa-solid';

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

  const fetchRadios = async (): Promise<Array<IRadioChannel>> => {
    const response = await fetch('https://teclead.de/recruiting/radios');
    const data = await response.json();
    return data.radios;
  };

  useEffect(() => {
    fetchRadios()
      .then(radios => {
        console.log(radios);
        setRadioChannels(radios);
      })
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    console.log(currentPlaying);
  }, [currentPlaying]);

  const renderChannels = () => {
    return radioChannels
      ? radioChannels.map(radioChannel => {
          return (
            <>
              <RadioChannel
                clicked={radioChannel === currentPlaying}
                onClick={e => setCurrentPlaying(radioChannel)}
              >
                <div>{radioChannel.name}</div>
                <div>
                  <b>{radioChannel.frequency}</b>
                </div>
              </RadioChannel>
              <Hr />
            </>
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
    </Container>
  );
};

export default Radio;
