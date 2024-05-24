// src/components/ContributionGraph.tsx
import React from 'react';
import GitHubCalendar from 'react-github-calendar';

interface ContributionGraphProps {
   username: string;
}

const ContributionGraph: React.FC<ContributionGraphProps> = ({ username }) => {
   return (
      <div>
         <GitHubCalendar username={username} />
      </div>
   );
};

export default ContributionGraph;