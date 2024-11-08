/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { ConstraintSchema } from './constraintSchema';
import type { ParametersSchema } from './parametersSchema';
import type { CreateStrategyVariantSchema } from './createStrategyVariantSchema';

/**
 * Schema representing the creation of a release plan milestone strategy.
 */
export interface ReleasePlanMilestoneStrategySchema {
    /** A list of the constraints attached to the strategy. See https://docs.getunleash.io/reference/strategy-constraints */
    constraints?: ConstraintSchema[];
    /**
     * The milestone strategy's ID. Milestone strategy IDs are ulids.
     */
    id: string;
    /** The ID of the milestone that this strategy belongs to. */
    milestoneId: string;
    /** An object containing the parameters for the strategy */
    parameters?: ParametersSchema;
    /** Ids of segments to use for this strategy */
    segments?: number[];
    /** The order of the strategy in the list */
    sortOrder: number;
    /** The name of the strategy type */
    strategyName: string;
    /**
     * A descriptive title for the strategy
     * @nullable
     */
    title?: string | null;
    /** Strategy level variants */
    variants?: CreateStrategyVariantSchema[];
}
