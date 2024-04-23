import accelerateIcon from './data/Accelerateicon.jpg';
import backdraftIcon from './data/Backdrafticon.jpg';
import blightPhoenixIcon from './data/Blightpheonixicon.jpg';
import chainReactionIcon from './data/Chainreactionicon.jpg';
import cloudKillIcon from './data/Cloudkillicon.jpg';
import convergeIcon from './data/Convergeicon.jpg';
import elatedIcon from './data/Elatedicon.jpg';
import fleetIcon from './data/Fleeticon.jpg';
import flickerIcon from './data/Flickericon.jpg';
import forsightIcon from './data/Foresighticon.jpg';
import heliosIcon from './data/Heliosicon.jpg';
import immolateIcon from './data/Immolateicon.jpg';
import inertiaIcon from './data/Inertiaicon.jpg';
import kineticReflectIcon from './data/Kineticreflecticon.jpg';
import lifeTapIcon from './data/Lifetapicon.jpg';
import mindsEyeIcon from './data/Mindseyeicon.jpg';
import quickenIcon from './data/Quickenicon.jpg';
import reaperIcon from './data/Reapericon.jpg';
import recompenseIcon from './data/Recompenseicon.jpg';
import resIcon from './data/Resicon.jpg';
import restorationIcon from './data/Restorationicon.jpg';
import ruinIcon from './data/Ruinicon.jpg';
import scornIcon from './data/Scornicon.jpg';
import subsequenceIcon from './data/Subsequenceicon.jpg';
import suspensionIcon from './data/Suspensionicon.jpg';
import sweetReleaseIcon from './data/Sweetreleaseicon.jpg';
import thoughtLockIcon from './data/Thoughtlockicon.jpg';
import wardIcon from './data/Wardicon.jpg';
import wreckIcon from './data/Wreckicon.jpg';

export const OutlawRogueData = [
  {
    id: 1,
    title: 'HP',
    tooltip: { content: 'Basic HP' },
    icon: lifeTapIcon,
    children: [
      {
        id: 2,
        title: 'Defence',
        tooltip: {
          content:
            'Defence basics',
        },
        icon: backdraftIcon,
        children: [
          {
            id: 3,
            title: 'Dexterity advanced',
            tooltip: {
              content: 'Dexterity',
            },
            icon: blightPhoenixIcon,
            children: [
              {
                id: 4,
                title: 'Spin Components',
                tooltip: {
                  content: 'Spin',
                },
                icon: chainReactionIcon,
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: 10,
        title: 'Mana',
        tooltip: {
          content:
            'Mana',
        },
        icon: cloudKillIcon,
        children: [
          {
            id: 11,
            title: 'Mana advance',
            tooltip: {
              content:
                'Mana advance',
            },
            icon: convergeIcon,
            children: [
              {
                id: 12,
                title: 'Mana Architecture',
                tooltip: { content: 'Mana Architecture' },
                icon: elatedIcon,
                children: [],
              },
              {
                id: 13,
                title: 'Mana Preprocessor',
                tooltip: { content: 'Sass, PostMana, Less' },
                icon: fleetIcon,
                children: [
                  {
                    id: 14,
                    title: 'Mana Frameworks',
                    tooltip: {
                      content:
                        'Mana',
                    },
                    icon: flickerIcon,
                    children: [],
                  },
                  {
                    id: 15,
                    title: 'Modern Mana',
                    tooltip: {
                      content:
                        'Mana',
                    },
                    icon: lifeTapIcon,
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 100,
        title: 'Swords',
        icon: forsightIcon,
        tooltip: {
          content:
            'Swords',
        },
        children: [
          {
            id: 101,
            title: 'Daggers',
            icon: inertiaIcon,
            tooltip: { content: 'Daggers' },
            children: [
              {
                id: 102,
                title: 'Poison',
                icon: heliosIcon,
                tooltip: { content: 'Poison' },
                children: [],
              },
            ],
          },
          {
            id: 103,
            title: 'Poison Checkers',
            icon: lifeTapIcon,
            tooltip: { content: 'Poison' },
            children: [],
          },
        ],
      },
      {
        id: 104,
        title: 'Armor Basic',
        tooltip: { content: 'Know the basics' },
        icon: immolateIcon,
        children: [
          {
            id: 105,
            title: 'Armor Managers',
            tooltip: { content: 'Armor' },
            icon: lifeTapIcon,
            children: [
              {
                id: 106,
                title: 'Armor Plate',
                icon: lifeTapIcon,
                tooltip: { content: 'Apollo, Relay Modern' },
                children: [],
              },
              {
                id: 107,
                title: 'Module Chest',
                icon: lifeTapIcon,
                tooltip: { content: 'Webpack, Rollup, Parcel' },
                children: [
                  {
                    id: 108,
                    title: 'Power',
                    tooltip: { content: 'Power' },
                    icon: lifeTapIcon,
                    children: [],
                  },
                  {
                    id: 109,
                    title: 'Helmet',
                    tooltip: {
                      content: 'Helmet',
                    },
                    icon: accelerateIcon,
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            id: 110,
            title: 'Stamina',
            tooltip: { content: 'Stamina' },
            icon: accelerateIcon,
            children: [],
          },
        ],
      },
      {
        id: 111,
        title: 'Power Stamina',
        tooltip: { content: 'Stamina' },
        icon: accelerateIcon,
        children: [
          {
            id: 112,
            title: 'Stamina Hosting',
            tooltip: { content: 'Stamina' },
            icon: wreckIcon,
            children: [],
          },
        ],
      },
      {
        id: 113,
        title: 'Lian',
        tooltip: { content: 'Stamina' },
        icon: accelerateIcon,
        children: [
          {
            id: 114,
            title: 'Stamina',
            tooltip: { content: 'Stamina' },
            icon: wreckIcon,
            children: [],
          },
        ],
      },
    ],
  },
];

export const AssassinationRogueData = [
  {
    id: 5,
    title: 'Basic HP',
    tooltip: { content: 'Basic HP' },
    icon: wardIcon,
    children: [
      {
        id: 120,
        title: 'Defence',
        tooltip: {
          content:
          'Defence'
        },
        icon: wreckIcon,
        children: [
          {
            id: 121,
            title: 'Defence advanced',
            tooltip: {
              content: 'Defence',
            },
            icon: accelerateIcon,
            children: [
              {
                id: 122,
                title: 'Defence',
                tooltip: {
                  content: 'Defence',
                },
                icon: accelerateIcon,
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: 123,
        title: 'Mana',
        tooltip: {
          content:
            'Learn the basics',
        },
        icon: accelerateIcon,
        children: [
          {
            id: 124,
            title: 'Mana3',
            tooltip: {
              content:
                'Transform, Transition, Animation, @font-face, Flex, Grid, Pseudo-selector',
            },
            icon: accelerateIcon,
            children: [
              {
                id: 26,
                title: 'Mana Architecture',
                tooltip: { content: 'BEM, OOMana, SMAMana' },
                icon: accelerateIcon,
                children: [],
              },
              {
                id: 27,
                title: 'Mana Preprocessor',
                tooltip: { content: 'Sass, PostMana, Less' },
                icon: wreckIcon,
                children: [
                  {
                    id: 28,
                    title: 'Mana Frameworks',
                    tooltip: {
                      content:
                        'Reactstrap, Material UI, Tailwind Mana, Chakra UI, Bootstrap, Materialize Mana, Bulma',
                    },
                    icon: thoughtLockIcon,
                    children: [],
                  },
                  {
                    id: 29,
                    title: 'Modern Mana',
                    tooltip: {
                      content:
                        'Styled Component, Mana Modules, Styled JSX, Emotion, Radium, Glamorous',
                    },
                    icon: scornIcon,
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 70,
        title: 'Power',
        icon: sweetReleaseIcon,
        tooltip: {
          content:
            'Power',
        },
        children: [
          {
            id: 71,
            title: 'Power',
            icon: subsequenceIcon,
            tooltip: { content: 'Power' },
            children: [
              {
                id: 72,
                title: 'Power-44',
                icon: suspensionIcon,
                tooltip: { content: 'Power-44s' },
                children: [],
              },
            ],
          },
          {
            id: 73,
            title: 'Type Shield',
            icon: resIcon,
            tooltip: { content: 'Type Shield' },
            children: [],
          },
        ],
      },
      {
        id: 74,
        title: 'Power',
        tooltip: { content: 'Know the basics' },
        icon: restorationIcon,
        children: [
          {
            id: 75,
            title: 'Overpower mana',
            tooltip: { content: 'Overpower mana' },
            icon: recompenseIcon,
            children: [
              {
                id: 180,
                title: 'Mana-22',
                icon: ruinIcon,
                tooltip: { content: 'Mana-22' },
                children: [],
              },
              {
                id: 181,
                title: 'Module Bundlers',
                icon: reaperIcon,
                tooltip: { content: 'Mana' },
                children: [
                  {
                    id: 182,
                    title: 'Test Your Power',
                    tooltip: { content: 'Test Your Power' },
                    icon: accelerateIcon,
                    children: [],
                  },
                  {
                    id: 6,
                    title: 'Overview',
                    tooltip: {
                      content: 'Overview',
                    },
                    icon: kineticReflectIcon,
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            id: 7,
            title: 'Overview',
            tooltip: { content: 'Overview' },
            icon: accelerateIcon,
            children: [],
          },
        ],
      },
      {
        id: 'Version Control System',
        title: 'Version Control System',
        tooltip: { content: 'Git, SVN' },
        icon: accelerateIcon,
        children: [
          {
            id: 'Repo Hosting Services',
            title: 'Repo Hosting Services',
            tooltip: { content: 'GitHub, Gitlab, Bitbucket' },
            icon: quickenIcon,
            children: [],
          },
        ],
      },
      {
        id: 8,
        title: 'Overview',
        tooltip: { content: 'Overview' },
        icon: accelerateIcon,
        children: [
          {
            id: 9,
            title: 'Overview',
            tooltip: { content: 'Overview' },
            icon: mindsEyeIcon,
            children: [],
          },
        ],
      },
    ],
  },
];

