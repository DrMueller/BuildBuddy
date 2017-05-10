export enum VssBuildReason {
    /**
     * No reason. This value should not be used.
     */
    None = 0,
    /**
     * The build was started manually.
     */
    Manual = 1,
    /**
     * The build was started for the trigger TriggerType.ContinuousIntegration.
     */
    IndividualCI = 2,
    /**
     * The build was started for the trigger TriggerType.BatchedContinuousIntegration.
     */
    BatchedCI = 4,
    /**
     * The build was started for the trigger TriggerType.Schedule.
     */
    Schedule = 8,
    /**
     * The build was created by a user.
     */
    UserCreated = 32,
    /**
     * The build was started manually for private validation.
     */
    ValidateShelveset = 64,
    /**
     * The build was started for the trigger ContinuousIntegrationType.Gated.
     */
    CheckInShelveset = 128,
    /**
     * The build was started by a pull request. Added in resource version 3.
     */
    PullRequest = 256,
    /**
     * The build was triggered for retention policy purposes.
     */
    Triggered = 431,
    /**
     * All reasons.
     */
    All = 495,
}
