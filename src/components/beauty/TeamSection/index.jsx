import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { StarIcon } from '@heroicons/react/24/solid';

import { 
  ContentContainer, 
  SectionHeader, 
  SectionTag, 
  SectionTitle, 
  SectionDescription 
} from '../../../styles/beauty/CommonStyles';

// Стили для компонента команды
const TeamContainer = styled.section`
  padding: 8rem 2rem;
  background-color: ${props => props.theme.colors.surface};
`;

const TeamGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2.5rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const TeamMemberCard = styled(motion.div)`
  background-color: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  }
`;

const MemberImage = styled.div`
  height: 300px;
  overflow: hidden;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${TeamMemberCard}:hover & img {
    transform: scale(1.05);
  }
`;

const MemberContent = styled.div`
  padding: 2rem;
`;

const MemberName = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.text.primary};
`;

const MemberPosition = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
  font-weight: 500;
`;

const MemberDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.7;
  color: ${props => props.theme.colors.text.secondary};
  margin-bottom: 1.5rem;
`;

const MemberStats = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  
  svg {
    width: 18px;
    height: 18px;
    color: #F59E0B;
  }
  
  span {
    font-weight: 600;
    font-size: 0.95rem;
  }
`;

const Experience = styled.div`
  font-size: 0.95rem;
  font-weight: 600;
`;

// Данные для команды
const teamMembers = [
  {
    id: 1,
    name: 'Анна Петрова',
    position: 'Стилист-парикмахер',
    description: 'Более 8 лет опыта в создании уникальных образов. Специализируется на сложном окрашивании и стрижках.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
    experience: '8 лет'
  },
  {
    id: 2,
    name: 'Михаил Соколов',
    position: 'Визажист',
    description: 'Опытный визажист с международным образованием. Создает безупречный макияж для любого случая.',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    experience: '6 лет'
  },
  {
    id: 3,
    name: 'Елена Иванова',
    position: 'Мастер маникюра и педикюра',
    description: 'Профессионал в области ухода за ногтями. Специализируется на сложном дизайне и спа-процедурах.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
    experience: '7 лет'
  }
];

// Анимационные варианты
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const BeautyTeamSection = () => {
  const { t } = useTranslation();

  return (
    <TeamContainer id="team">
      <ContentContainer>
        <SectionHeader>
          <SectionTag
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t('beauty.team.tag', 'Наши специалисты')}
          </SectionTag>
          
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t('beauty.team.title', 'Профессиональная команда')}
          </SectionTitle>
          
          <SectionDescription
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t('beauty.team.description', 'Наши опытные мастера прошли обучение в лучших школах красоты и постоянно совершенствуют свои навыки. Мы гордимся профессионализмом и творческим подходом наших специалистов.')}
          </SectionDescription>
        </SectionHeader>
        
        <TeamGrid
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} variants={itemVariants}>
              <MemberImage>
                <img src={member.image} alt={member.name} />
              </MemberImage>
              
              <MemberContent>
                <MemberName>{member.name}</MemberName>
                <MemberPosition>{member.position}</MemberPosition>
                <MemberDescription>{member.description}</MemberDescription>
                
                <MemberStats>
                  <Rating>
                    <StarIcon />
                    <span>{member.rating}</span>
                  </Rating>
                  
                  <Experience>
                    {t('beauty.team.experience', 'Опыт')}: {member.experience}
                  </Experience>
                </MemberStats>
              </MemberContent>
            </TeamMemberCard>
          ))}
        </TeamGrid>
      </ContentContainer>
    </TeamContainer>
  );
};

export default BeautyTeamSection;
