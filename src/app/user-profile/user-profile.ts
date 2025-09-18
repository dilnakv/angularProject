import { Component, QueryList, ViewChildren } from '@angular/core';
import { Skill } from './skill/skill';

@Component({
  selector: 'app-user-profile',
  standalone: false,
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css'
})
export class UserProfile {
  skills: string[] = ['React', 'Angular', 'Python', 'Java', 'Node.js'];
  selectedSkillsMessage: string = '';

  @ViewChildren(Skill) Skill!: QueryList<Skill>;

  showSkills() {
    const selected = this.Skill
      .filter((comp) => comp.isSelected)
      .map((comp) => comp.skillName);

    if (selected.length > 0) {
      this.selectedSkillsMessage = `User knows ${selected.join(', ')}`;
    } else {
      this.selectedSkillsMessage = 'No skills selected';
    }
  }
}
