// <======== Assest-Import ========> //

// <======== Component-Import ========> //
import WorkspaceElement from "./SpaceElement";

// <======== Interfaces ========> //
import { InitialState } from "../../../../../services/features/workspace/workspaceSlice";

// <======== Constants ========> //

// <======== Hooks ========> //

interface ISpacesAndProjectsListProps {
  SpacesList: InitialState[];
}

const SpacesAndProjectsList: React.FC<ISpacesAndProjectsListProps> = ({
  SpacesList,
}): JSX.Element => {
  return (
    <dl className="h-full flex flex-col gap-s overflow-scroll">
      {SpacesList?.map((space) => {
        return <WorkspaceElement key={space.id} workspace={space} />;
      })}
    </dl>
  );
};

export default SpacesAndProjectsList;
