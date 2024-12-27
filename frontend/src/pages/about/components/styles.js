import styled from 'styled-components';

export const MainContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  padding: 20px;
  text-align: center;
`;

export const Section = styled.section`
  margin: 40px 0;
`;

export const Title = styled.h1`
  font-size: 3em;
  color: #34495e;
`;

export const Subtitle = styled.h2`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #34495e;
`;

export const Paragraph = styled.p`
  font-size: 1.2em;
  color: #666;
  margin: 0 auto;
  max-width: 800px;
  line-height: 1.6;
  text-align:left
`;

export const SubParagraph = styled.p`
  font-size: 1.2em;
  color: white;
  margin: 0 auto;
  max-width: 800px;
  line-height: 1.6;
  text-align:left
`;

export const TeamContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export const TeamMember = styled.div`
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 200px;
  height: 100%;
  text-align: center;
`;

export const TeamMemberImage = styled.div`
  background: #ddd;
  border-radius: 50%;
  height: 100px;
  margin: 0 auto 10px;
  width: 100px;
`;

export const TeamMemberName = styled.h3`
  font-size: 1.2em;
  margin-bottom: 5px;
  color: #34495e;
`;

export const TeamMemberRole = styled.p`
  font-size: 1em;
  color: #888;
`;

export const JoinSection = styled.section`
  background: #a67bdb;
  padding: 40px;
`;

export const JoinButton = styled.a`
  background: rgb(37 99 235);
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-size: 1.2em;
  margin-top: 20px;
  padding: 10px 20px;
  text-decoration: none;
  &:hover {
    background: #27ae60;
  }
`;
