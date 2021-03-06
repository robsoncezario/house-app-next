import styled from 'styled-components'
import illustration from '../../assets/background.webp'

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100vw;
  height: 100%;

  @media(max-width: 768px) {
    padding-bottom: 56px;
   }
`

export const IllustrationContainer = styled.div`
  width: 100%;
  height: auto;
  min-height: calc(100vh - 60px);
  background: linear-gradient(to bottom, rgba(0, 0, 0, .6), rgba(0, 0, 0, .6)), url(${illustration}) no-repeat center center fixed;
  background-size: cover, cover;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 40px;
  padding-right: 40px;

  @media(max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    padding-top: 30px;
    padding-bottom: 30px;
   }
`

export const Column = styled.div`
  max-width: 40%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  @media(max-width: 768px) {
    width: 90vw;
    max-width: 90vw;
   }
`

export const Title = styled.div`
  font-size: 60px;
  line-height: 60px;
  font-weight: 500;
  color: white;

  @media(max-width: 768px) {
    text-align: center;
    font-size: 30px;
    line-height: 30px;
    align-self: center;
   }
`

export const Description = styled.div`
  line-height: 20px;
  font-size: 20px;
  font-weight: 400;
  margin-top: 15px;
  color: white;

  @media(max-width: 768px) {
    max-width: 70%;
    font-weight: 500;
    margin-top: 15px;
    font-size: 16px;
    line-height: 16px;
    text-align: center;
    align-self: center;
   }
`

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  font-size: 22px;
  line-height: 22px;
  font-weight: bold;
  color: ${props => props.theme.palette.primary.main};
  cursor: pointer;
  -webkit-user-select: none;
  -webkit-user-drag: none;

  & i {
    font-size: 17px;
    line-height: 22px;
    margin-top: 5px;
  }

  &:hover {
    opacity: .7;
  }

  @media(max-width: 768px) {
    margin-bottom: 20px;
    text-align: center;
    align-self: center;
   }
`
