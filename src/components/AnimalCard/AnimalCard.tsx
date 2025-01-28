import {
  AnimalCardWrapper,
  CardImage,
  Title,
  SpeciesBlock
} from "./styles";
import { AnimalCardProps } from "./types";

function AnimalCard({ animalName, animalSpecies, animalImg, children }: AnimalCardProps) {
  return (
    <AnimalCardWrapper>
      <Title>{animalName}</Title>
      <SpeciesBlock>{animalSpecies}</SpeciesBlock>
      <CardImage src={animalImg} />
      {/* prop children позволяет добавлять дополнительную структуру(JSX, компоненты) в компонент */}
      {children}
    </AnimalCardWrapper>
  );
}

export default AnimalCard;
