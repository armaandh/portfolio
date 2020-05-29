import { CheckCircleOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

import { 
  Box,
  ModelsContainer,
  CaseStudiesContainer,
  SkillsContainer,
  SeeMoreContainer,
  SkillsDropdown
} from '../Boxes';

export const SeeMoreContent = ({ text, list, description, methods }) => {
  const currentList = eval(list)
  return (
    <SeeMoreContainer className="more-container">
      <div className="description-container">
        <div className="title">
          <InfoCircleOutlined className="icon" />
          <span>{description}</span>
        </div>
        <p className="content" dangerouslySetInnerHTML={{ __html: text }}></p>
      </div>
      <div className="methods-container">
        <div className="title">
          <CheckCircleOutlined className="icon" />
          <span>{methods}</span>
        </div>
        <ul className="content">
          {currentList.map((name, i) => <li key={i}>{name}</li>)}
        </ul>
      </div>
    </SeeMoreContainer>
  )
}

export const UXdesignDrop = ({ text, list, description, methods }) => {
  return (
    <SeeMoreContent
      text={text}
      list={list}
      description={description}
      methods={methods}
    />
  )
}

export const EngineeringDrop = ({ text, list, description, methods }) => {
  return (
    <SeeMoreContent
      text={text}
      list={list}
      description={description}
      methods={methods}
    />
  )
}

export const PsychologyDrop = ({ text, list, description, methods }) => {
  return (
    <SeeMoreContent
      text={text}
      list={list}
      description={description}
      methods={methods}
    />
  )
}

export const UIdesignDrop = ({ text, list, description, methods }) => {
  return (
    <SeeMoreContent
      text={text}
      list={list}
      description={description}
      methods={methods}
    />
  )
}

export const MarketingDrop = ({ text, list, description, methods }) => {
  return (
    <SeeMoreContent
      text={text}
      list={list}
      description={description}
      methods={methods}
    />
  )
}

export const EntrepreneurshipDrop = ({ text, list, description, methods }) => {
  return (
    <SeeMoreContent
      text={text}
      list={list}
      description={description}
      methods={methods}
    />
  )
}


export const LeanStartupDrop = ({ text, list, description, methods }) => {
  return (
    <SeeMoreContent
      text={text}
      list={list}
      description={description}
      methods={methods}
    />
  )
}

export const DesignThinkingDrop = ({ text, list, description, methods }) => {
  return (
    <SeeMoreContent
      text={text}
      list={list}
      description={description}
      methods={methods}
    />
  )
}

export const BigFiveTraitsDrop = ({ text, list, description, methods }) => {
  return (
    <SeeMoreContent
      text={text}
      list={list}
      description={description}
      methods={methods}
    />
  )
}