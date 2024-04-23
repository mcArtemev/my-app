import * as React from 'react';
import theme from './data/theme.js';
import {
  SkillTree,
  SkillTreeGroup,
} from 'beautiful-skill-tree';
import FilterInput from './FIlterInput.tsx';
import {
  OutlawRogueData,
  AssassinationRogueData,
} from './mockData.tsx';
import logo from "./logo.png";

let powerCount = 0;
let manaCount = 0;
let hpCount = 0;
function handleNodeSelect(e) {
    console.log('selected node - ', e.key);
    console.log('new state - ', e.state);
    if(e.key <= 10 && e.state == "selected"){
      hpCount = hpCount + 10
    }
    if(e.key <= 10 && e.state == "unlocked"){
      hpCount = hpCount - 10
    }

    if(e.key >= 10 && e.key <= 100 && e.state == "selected"){
      manaCount = manaCount + 10
    }
    if(e.key >= 10 && e.key <= 100 && e.state == "unlocked"){
      manaCount = manaCount - 10
    }

    if(e.key >= 100 && e.state == "selected"){
      powerCount = powerCount + 10
    }
    if(e.key >= 100 && e.state == "unlocked"){
      powerCount = powerCount - 10
    }
    
}

function handleSave(
    storage,
    treeId,
    skills
  ) {
    console.log(skills);
    return storage.setItem(`skills-${treeId}`, JSON.stringify(skills));
  }

function clearAll(){
  powerCount = 0
  manaCount = 0;
  hpCount = 0;
}

const SkillTreeModule = () => {
    return (
        <SkillTreeGroup
          theme={theme}
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
                  <img
              style={{ width: "500px", height: "200px" }}
              src={logo}
              alt="wow logo."
            />
                  <h2 className="Example__heading">
                    Points spent: {totalSelectedCount}/{totalSkillCount}
                  </h2>
                  <ul className="stats">
                   <li> Power: {powerCount}</li>
                   <li> HP: {hpCount}</li>
                   <li>  Mana: {manaCount}</li>
                  </ul>
                  <button className="Example__reset-button" onClick={() => {resetSkills(); clearAll()}}>
                    
                  </button>
  
                  <FilterInput handleFilter={handleFilter} />
                </nav>
                
                <div>
                  <SkillTree
                    closedByDefault
                    treeId="Assassination"
                    handleNodeSelect={handleNodeSelect}
                    title="Assassination Skills"
                    description="These are the progressions for squats"
                    data={OutlawRogueData}
                    handleSave={handleSave}
                    collapsible
                  />
                  
                  
                  <SkillTree
                    closedByDefault
                    treeId="Outlaw"
                    handleNodeSelect={handleNodeSelect}
                    title="Outlaw Skills"
                    data={AssassinationRogueData}
                    handleSave={handleSave}
                    collapsible
                  />
                  
                </div>
              </React.Fragment>
            );
          }}
        </SkillTreeGroup>
      
    );
  };

  export default SkillTreeModule;