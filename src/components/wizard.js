import React, { useState } from 'react'
import InlineCard from './inlineCard'

import styled from 'styled-components'

const links = [
  {
    name: 'Developers',
    sublinks: [
      {
        title: 'Difference from Smart Contract',
        link: '/docs/v2/revocable-contract-integration/difference-from-smart-contract/',
        description: 'Difference from Revocable Contract and smart contract.',
        tag: 'reference',
        icon: '📦'
      },
      {
        title: 'Usage Method',
        link: '/docs/v2/revocable-contract-integration/usage-method/',
        description: 'A step-by-step guide to getting started building interfaces with Byteco.',
        tag: 'tutorial',
        icon: '🧼'
      },

      {
        title: 'Mongolia Consensus',
        link: '/docs/v2/core-concepts/mongolia-consensus/',
        description: 'mongolia consensus on Byteco.',
        tag: 'guide',
        icon: '⚡'
      },
      {
        title: 'AI',
        link: '/docs/v2/core-concepts/artificial-intelligence/',
        description: 'Artificial Intelligence on chain.',
        icon: '🔮'
      }
    ]
  },
  {
    name: 'Tutorial',
    sublinks: [
      {
        title: 'tutorial of byteco',
        link: '/docs/v1/utorials',
        description: 'The blockchain user guide.',
        tag: 'tutorial'
      },
      {
        title: 'Glossary',
        link: '/docs/v2/protocol-overview/glossary',
        description: 'An overview of the terms used in these docs and on the interface',
        tag: 'reference'
      },
      {
        title: 'API',
        link: '/docs/v2/API',
        description: 'How to using for AI.',
        tag: 'ai'
      }
    ]
  },
  {
    name: 'Cross Chain',
    sublinks: [
      {
        title: 'Cross Chain of the Byteco',
        link: '/docs/v2/cross-chain',
        description: 'An overview of what a Byteco cross chain.'
      },
      {
        title: 'Branch Chain',
        link: '/docs/v2/branch-chain',
        description: 'Branch Chain.'
      }
    ]
  },
  {
    name: 'Tokens',
    sublinks: [
      {
        title: 'Core Concepts',
        link: '/docs/v2/protocol-overview',
        description: 'A high level technical overview of the Byteco protocol.'
      }
    ]
  }
]

const StyledWizard = styled.div`
  color: ${({ theme, outlined }) => (outlined ? theme.colors.link : theme.textColor)};
  width: 100%;
  max-width: 720px;
  border-radius: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 1.5rem;

  @media (max-width: 960px) {
    width: 100%;
    max-width: 450px;
    margin: 1rem 0;
  }
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
`

const Wizard = () => {
  const [currentCategory] = useState('Developers')

  return (
    <StyledWizard>
      <CardWrapper>
        {links
          .filter(category => {
            return category.name === currentCategory
          })
          .map(category => {
            return category.sublinks.map((sublink, i) => {
              return (
                <InlineCard
                  key={i}
                  title={sublink.title}
                  desc={sublink.description}
                  to={sublink.link}
                  tag={sublink.tag}
                  icon={sublink.icon}
                />
              )
            })
          })}
      </CardWrapper>
    </StyledWizard>
  )
}

export default Wizard
