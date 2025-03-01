import { ActivityTargetChips } from '@/activities/components/ActivityTargetChips';
import { InlineCellContainer } from '@/ui/editable-field/components/InlineCellContainer';
import { FieldRecoilScopeContext } from '@/ui/editable-field/states/recoil-scope-contexts/FieldRecoilScopeContext';
import { IconArrowUpRight } from '@/ui/icon';
import { RelationPickerHotkeyScope } from '@/ui/input/relation-picker/types/RelationPickerHotkeyScope';
import { RecoilScope } from '@/ui/utilities/recoil-scope/components/RecoilScope';
import { Activity, ActivityTarget, Company, Person } from '~/generated/graphql';

import { ActivityRelationEditableFieldEditMode } from './ActivityRelationEditableFieldEditMode';

type OwnProps = {
  activity?: Pick<Activity, 'id'> & {
    activityTargets?: Array<
      Pick<ActivityTarget, 'id' | 'personId' | 'companyId'> & {
        person?: Pick<Person, 'id' | 'displayName'>;
        company?: Pick<Company, 'id' | 'domainName' | 'name'>;
      }
    > | null;
  };
};

export const ActivityRelationEditableField = ({ activity }: OwnProps) => {
  return (
    <RecoilScope CustomRecoilScopeContext={FieldRecoilScopeContext}>
      <RecoilScope>
        <InlineCellContainer
          useEditButton
          customEditHotkeyScope={{
            scope: RelationPickerHotkeyScope.RelationPicker,
          }}
          IconLabel={IconArrowUpRight}
          editModeContent={
            <ActivityRelationEditableFieldEditMode activity={activity} />
          }
          label="Relations"
          displayModeContent={
            <ActivityTargetChips targets={activity?.activityTargets} />
          }
          isDisplayModeContentEmpty={activity?.activityTargets?.length === 0}
        />
      </RecoilScope>
    </RecoilScope>
  );
};
