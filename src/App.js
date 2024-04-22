import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import {
//   SkillTree,
//   SkillTreeGroup,
//   SkillProvider,
//   SkillGroupDataType,
//   SavedDataType,
// } from '../src';
import {
  SkillTree,
  SkillTreeGroup,
  SkillProvider,
  SkillGroupDataType,
  SavedDataType,
  NodeSelectEvent,
} from 'beautiful-skill-tree';
import './index.css';
import {
  legsPushData,
  webDevData,
} from './mockData.tsx';
//import { ContextStorage } from '../src/models';
import FilterInput from './FIlterInput.tsx';

function handleSave(
  storage,
  treeId,
  skills
) {
  return storage.setItem(`skills-${treeId}`, JSON.stringify(skills));
}

function handleNodeSelect(e) {
  console.log('selected node - ', e.key);
  console.log('new state - ', e.state);
}

const App = () => {
  return (
    <SkillProvider>
      <SkillTreeGroup
        theme={{
          headingFont: 'impact',
          nodeAlternativeActiveBackgroundColor: 'blue',
          nodeAlternativeFontColor: '#F7B538',
          nodeAltenativeActiveFontColor: 'white',
        }}
      >
        {({
          skillCount,
          selectedSkillCount,
          resetSkills,
          handleFilter,
        }) => {
          const totalSkillCount = skillCount.optional + skillCount.required;
          const totalSelectedCount =
            selectedSkillCount.optional + selectedSkillCount.required;

          return (
            <React.Fragment>
              <nav
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: '32px',
                }}
              >
                <ul>
                  <li>
                    <a href="#sp">Squat Progression</a>
                  </li>
                  <li>
                    <a href="#web">Programming Progression</a>
                  </li>
                </ul>
                <h2 className="Example__heading">
                  Completed skills: {totalSelectedCount}/{totalSkillCount}
                </h2>
                <button className="Example__reset-button" onClick={resetSkills}>
                  Reset
                </button>

                <FilterInput handleFilter={handleFilter} />
              </nav>
              <div>
                <SkillTree
                  closedByDefault
                  treeId="sp"
                  handleNodeSelect={handleNodeSelect}
                  title="Squat Progression"
                  description="These are the progressions for squats"
                  data={legsPushData}
                  collapsible
                />
                
                
                <SkillTree
                  closedByDefault
                  treeId="web"
                  handleNodeSelect={handleNodeSelect}
                  title="Programming Tree"
                  data={webDevData}
                  handleSave={handleSave}
                  collapsible
                />
                
              </div>
            </React.Fragment>
          );
        }}
      </SkillTreeGroup>
    </SkillProvider>
  );
};

export default App;
