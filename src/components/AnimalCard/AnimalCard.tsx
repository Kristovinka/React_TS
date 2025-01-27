import { MainAnimalCard, Image } from './styles'
import { AnimalProps } from "./types";

function AnimalCard({
  animalName,
  animalSpecies,
  animalImg,
  children,
}: AnimalProps) {
  return (
    <MainAnimalCard>
      <h3>{animalName}</h3>
      <div>{animalSpecies}</div>
      <Image src={animalImg} />
      {children}
    </MainAnimalCard>
  );
}

export default AnimalCard;
