// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { IoTServiceException as __BaseException } from "./IoTServiceException";

import {
  AbortConfig,
  AggregationType,
  AlertTarget,
  AlertTargetType,
  AttributePayload,
  AuditCheckConfiguration,
  AuditFrequency,
  AuditMitigationActionsTaskTarget,
  AuditNotificationTarget,
  AuditNotificationType,
  AuthInfo,
  AuthorizerConfig,
  AuthorizerStatus,
  AuthResult,
  AutoRegistrationStatus,
  Behavior,
  BillingGroupProperties,
  CertificateProviderOperation,
  CustomMetricType,
  DayOfWeek,
  DimensionType,
  FleetMetricUnit,
  JobExecutionsRetryConfig,
  JobExecutionsRolloutConfig,
  LogLevel,
  MetricsExportConfig,
  MetricToRetain,
  MetricValue,
  MitigationActionParams,
  OTAUpdateStatus,
  PackageVersionArtifact,
  PackageVersionStatus,
  Policy,
  PresignedUrlConfig,
  ProvisioningHook,
  RelatedResource,
  ResourceIdentifier,
  ServerCertificateConfig,
  StreamFile,
  Tag,
  TemplateType,
  ThingGroupProperties,
  ThingTypeProperties,
  TimeoutConfig,
  TlsConfig,
  TopicRuleDestinationStatus,
  TopicRulePayload,
  VerificationState,
  ViolationEventAdditionalInfo,
} from "./models_0";

import {
  BehaviorCriteriaType,
  CACertificateStatus,
  CertificateMode,
  CertificateStatus,
  Configuration,
  DetectMitigationActionsTaskTarget,
  DomainConfigurationStatus,
  EventType,
  GroupNameAndArn,
  LogTargetType,
  MetricDatum,
  MitigationActionType,
  RegistrationConfig,
  Status,
  ThingGroupIndexingConfiguration,
  ThingIndexingConfiguration,
  ThingTypeMetadata,
  VersionUpdateByJobsConfig,
  ViolationEventOccurrenceRange,
} from "./models_1";

/**
 * @public
 */
export interface ListMetricValuesResponse {
  /**
   * <p>The data the thing reports for the metric during the specified time period.</p>
   * @public
   */
  metricDatumList?: MetricDatum[];

  /**
   * <p>A token that can be used to retrieve the next set of results, or <code>null</code>
   *         if there are no additional results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListMitigationActionsRequest {
  /**
   * <p>Specify a value to limit the result to mitigation actions with a specific action type.</p>
   * @public
   */
  actionType?: MitigationActionType;

  /**
   * <p>The maximum number of results to return at one time. The default is 25.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>Information that identifies a mitigation action. This information is returned by ListMitigationActions.</p>
 * @public
 */
export interface MitigationActionIdentifier {
  /**
   * <p>The friendly name of the mitigation action.</p>
   * @public
   */
  actionName?: string;

  /**
   * <p>The IAM role ARN used to apply this mitigation action.</p>
   * @public
   */
  actionArn?: string;

  /**
   * <p>The date when this mitigation action was created.</p>
   * @public
   */
  creationDate?: Date;
}

/**
 * @public
 */
export interface ListMitigationActionsResponse {
  /**
   * <p>A set of actions that matched the specified filter criteria.</p>
   * @public
   */
  actionIdentifiers?: MitigationActionIdentifier[];

  /**
   * <p>The token for the next set of results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListOTAUpdatesRequest {
  /**
   * <p>The maximum number of results to return at one time.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>A token used to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The OTA update job status.</p>
   * @public
   */
  otaUpdateStatus?: OTAUpdateStatus;
}

/**
 * <p>An OTA update summary.</p>
 * @public
 */
export interface OTAUpdateSummary {
  /**
   * <p>The OTA update ID.</p>
   * @public
   */
  otaUpdateId?: string;

  /**
   * <p>The OTA update ARN.</p>
   * @public
   */
  otaUpdateArn?: string;

  /**
   * <p>The date when the OTA update was created.</p>
   * @public
   */
  creationDate?: Date;
}

/**
 * @public
 */
export interface ListOTAUpdatesResponse {
  /**
   * <p>A list of OTA update jobs.</p>
   * @public
   */
  otaUpdates?: OTAUpdateSummary[];

  /**
   * <p>A token to use to get the next set of results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>The input to the ListOutgoingCertificates operation.</p>
 * @public
 */
export interface ListOutgoingCertificatesRequest {
  /**
   * <p>The result page size.</p>
   * @public
   */
  pageSize?: number;

  /**
   * <p>The marker for the next set of results.</p>
   * @public
   */
  marker?: string;

  /**
   * <p>Specifies the order for results. If True, the results are returned in ascending
   *          order, based on the creation date.</p>
   * @public
   */
  ascendingOrder?: boolean;
}

/**
 * <p>A certificate that has been transferred but not yet accepted.</p>
 * @public
 */
export interface OutgoingCertificate {
  /**
   * <p>The certificate ARN.</p>
   * @public
   */
  certificateArn?: string;

  /**
   * <p>The certificate ID.</p>
   * @public
   */
  certificateId?: string;

  /**
   * <p>The Amazon Web Services account to which the transfer was made.</p>
   * @public
   */
  transferredTo?: string;

  /**
   * <p>The date the transfer was initiated.</p>
   * @public
   */
  transferDate?: Date;

  /**
   * <p>The transfer message.</p>
   * @public
   */
  transferMessage?: string;

  /**
   * <p>The certificate creation date.</p>
   * @public
   */
  creationDate?: Date;
}

/**
 * <p>The output from the ListOutgoingCertificates operation.</p>
 * @public
 */
export interface ListOutgoingCertificatesResponse {
  /**
   * <p>The certificates that are being transferred but not yet accepted.</p>
   * @public
   */
  outgoingCertificates?: OutgoingCertificate[];

  /**
   * <p>The marker for the next set of results.</p>
   * @public
   */
  nextMarker?: string;
}

/**
 * @public
 */
export interface ListPackagesRequest {
  /**
   * <p>The maximum number of results returned at one time.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>A summary of information about a software package.</p>
 * @public
 */
export interface PackageSummary {
  /**
   * <p>The name for the target software package.</p>
   * @public
   */
  packageName?: string;

  /**
   * <p>The name of the default package version.</p>
   * @public
   */
  defaultVersionName?: string;

  /**
   * <p>The date that the package was created.</p>
   * @public
   */
  creationDate?: Date;

  /**
   * <p>The date that the package was last updated.</p>
   * @public
   */
  lastModifiedDate?: Date;
}

/**
 * @public
 */
export interface ListPackagesResponse {
  /**
   * <p>The software package summary.</p>
   * @public
   */
  packageSummaries?: PackageSummary[];

  /**
   * <p>The token for the next set of results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListPackageVersionsRequest {
  /**
   * <p>The name of the target software package.</p>
   * @public
   */
  packageName: string | undefined;

  /**
   * <p>The status of the package version. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/preparing-to-use-software-package-catalog.html#package-version-lifecycle">Package version lifecycle</a>.</p>
   * @public
   */
  status?: PackageVersionStatus;

  /**
   * <p>The maximum number of results to return at one time.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>A summary of information about a package version.</p>
 * @public
 */
export interface PackageVersionSummary {
  /**
   * <p>The name of the associated software package.</p>
   * @public
   */
  packageName?: string;

  /**
   * <p>The name of the target package version.</p>
   * @public
   */
  versionName?: string;

  /**
   * <p>The status of the package version. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/preparing-to-use-software-package-catalog.html#package-version-lifecycle">Package version lifecycle</a>.</p>
   * @public
   */
  status?: PackageVersionStatus;

  /**
   * <p>The date that the package version was created.</p>
   * @public
   */
  creationDate?: Date;

  /**
   * <p>The date that the package version was last updated.</p>
   * @public
   */
  lastModifiedDate?: Date;
}

/**
 * @public
 */
export interface ListPackageVersionsResponse {
  /**
   * <p>Lists the package versions associated to the package.</p>
   * @public
   */
  packageVersionSummaries?: PackageVersionSummary[];

  /**
   * <p>The token for the next set of results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>The input for the ListPolicies operation.</p>
 * @public
 */
export interface ListPoliciesRequest {
  /**
   * <p>The marker for the next set of results.</p>
   * @public
   */
  marker?: string;

  /**
   * <p>The result page size.</p>
   * @public
   */
  pageSize?: number;

  /**
   * <p>Specifies the order for results. If true, the results are returned in ascending
   *          creation order.</p>
   * @public
   */
  ascendingOrder?: boolean;
}

/**
 * <p>The output from the ListPolicies operation.</p>
 * @public
 */
export interface ListPoliciesResponse {
  /**
   * <p>The descriptions of the policies.</p>
   * @public
   */
  policies?: Policy[];

  /**
   * <p>The marker for the next set of results, or null if there are no additional
   *          results.</p>
   * @public
   */
  nextMarker?: string;
}

/**
 * <p>The input for the ListPolicyPrincipals operation.</p>
 * @public
 */
export interface ListPolicyPrincipalsRequest {
  /**
   * <p>The policy name.</p>
   * @public
   */
  policyName: string | undefined;

  /**
   * <p>The marker for the next set of results.</p>
   * @public
   */
  marker?: string;

  /**
   * <p>The result page size.</p>
   * @public
   */
  pageSize?: number;

  /**
   * <p>Specifies the order for results. If true, the results are returned in ascending
   *          creation order.</p>
   * @public
   */
  ascendingOrder?: boolean;
}

/**
 * <p>The output from the ListPolicyPrincipals operation.</p>
 * @public
 */
export interface ListPolicyPrincipalsResponse {
  /**
   * <p>The descriptions of the principals.</p>
   * @public
   */
  principals?: string[];

  /**
   * <p>The marker for the next set of results, or null if there are no additional
   *          results.</p>
   * @public
   */
  nextMarker?: string;
}

/**
 * <p>The input for the ListPolicyVersions operation.</p>
 * @public
 */
export interface ListPolicyVersionsRequest {
  /**
   * <p>The policy name.</p>
   * @public
   */
  policyName: string | undefined;
}

/**
 * <p>Describes a policy version.</p>
 * @public
 */
export interface PolicyVersion {
  /**
   * <p>The policy version ID.</p>
   * @public
   */
  versionId?: string;

  /**
   * <p>Specifies whether the policy version is the default.</p>
   * @public
   */
  isDefaultVersion?: boolean;

  /**
   * <p>The date and time the policy was created.</p>
   * @public
   */
  createDate?: Date;
}

/**
 * <p>The output from the ListPolicyVersions operation.</p>
 * @public
 */
export interface ListPolicyVersionsResponse {
  /**
   * <p>The policy versions.</p>
   * @public
   */
  policyVersions?: PolicyVersion[];
}

/**
 * <p>The input for the ListPrincipalPolicies operation.</p>
 * @public
 */
export interface ListPrincipalPoliciesRequest {
  /**
   * <p>The principal. Valid principals are CertificateArn (arn:aws:iot:<i>region</i>:<i>accountId</i>:cert/<i>certificateId</i>), thingGroupArn (arn:aws:iot:<i>region</i>:<i>accountId</i>:thinggroup/<i>groupName</i>) and CognitoId (<i>region</i>:<i>id</i>).</p>
   * @public
   */
  principal: string | undefined;

  /**
   * <p>The marker for the next set of results.</p>
   * @public
   */
  marker?: string;

  /**
   * <p>The result page size.</p>
   * @public
   */
  pageSize?: number;

  /**
   * <p>Specifies the order for results. If true, results are returned in ascending creation
   *          order.</p>
   * @public
   */
  ascendingOrder?: boolean;
}

/**
 * <p>The output from the ListPrincipalPolicies operation.</p>
 * @public
 */
export interface ListPrincipalPoliciesResponse {
  /**
   * <p>The policies.</p>
   * @public
   */
  policies?: Policy[];

  /**
   * <p>The marker for the next set of results, or null if there are no additional
   *          results.</p>
   * @public
   */
  nextMarker?: string;
}

/**
 * <p>The input for the ListPrincipalThings operation.</p>
 * @public
 */
export interface ListPrincipalThingsRequest {
  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   * 			value from a previous response; otherwise <b>null</b> to receive
   * 			the first set of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return in this operation.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The principal.</p>
   * @public
   */
  principal: string | undefined;
}

/**
 * <p>The output from the ListPrincipalThings operation.</p>
 * @public
 */
export interface ListPrincipalThingsResponse {
  /**
   * <p>The things.</p>
   * @public
   */
  things?: string[];

  /**
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListProvisioningTemplatesRequest {
  /**
   * <p>The maximum number of results to return at one time.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>A token to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>A summary of information about a provisioning template.</p>
 * @public
 */
export interface ProvisioningTemplateSummary {
  /**
   * <p>The ARN of the provisioning template.</p>
   * @public
   */
  templateArn?: string;

  /**
   * <p>The name of the provisioning template.</p>
   * @public
   */
  templateName?: string;

  /**
   * <p>The description of the provisioning template.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The date when the provisioning template summary was created.</p>
   * @public
   */
  creationDate?: Date;

  /**
   * <p>The date when the provisioning template summary was last modified.</p>
   * @public
   */
  lastModifiedDate?: Date;

  /**
   * <p>True if the fleet provision template is enabled, otherwise false.</p>
   * @public
   */
  enabled?: boolean;

  /**
   * <p>The type you define in a provisioning template. You can create a template with only one type.
   *          You can't change the template type after its creation. The default value is <code>FLEET_PROVISIONING</code>.
   *          For more information about provisioning template, see: <a href="https://docs.aws.amazon.com/iot/latest/developerguide/provision-template.html">Provisioning template</a>.
   *       </p>
   * @public
   */
  type?: TemplateType;
}

/**
 * @public
 */
export interface ListProvisioningTemplatesResponse {
  /**
   * <p>A list of provisioning templates</p>
   * @public
   */
  templates?: ProvisioningTemplateSummary[];

  /**
   * <p>A token to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListProvisioningTemplateVersionsRequest {
  /**
   * <p>The name of the provisioning template.</p>
   * @public
   */
  templateName: string | undefined;

  /**
   * <p>The maximum number of results to return at one time.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>A token to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>A summary of information about a fleet provision template version.</p>
 * @public
 */
export interface ProvisioningTemplateVersionSummary {
  /**
   * <p>The ID of the fleet provisioning template version.</p>
   * @public
   */
  versionId?: number;

  /**
   * <p>The date when the provisioning template version was created</p>
   * @public
   */
  creationDate?: Date;

  /**
   * <p>True if the provisioning template version is the default version, otherwise
   *          false.</p>
   * @public
   */
  isDefaultVersion?: boolean;
}

/**
 * @public
 */
export interface ListProvisioningTemplateVersionsResponse {
  /**
   * <p>The list of provisioning template versions.</p>
   * @public
   */
  versions?: ProvisioningTemplateVersionSummary[];

  /**
   * <p>A token to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListRelatedResourcesForAuditFindingRequest {
  /**
   * <p>The finding Id.</p>
   * @public
   */
  findingId: string | undefined;

  /**
   * <p>A token that can be used to retrieve the next set of results,
   *       or <code>null</code> if there are no additional results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return at one time.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListRelatedResourcesForAuditFindingResponse {
  /**
   * <p>The related resources.</p>
   * @public
   */
  relatedResources?: RelatedResource[];

  /**
   * <p>A token that can be used to retrieve the next set of results,
   *       or <code>null</code> for the first API call.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListRoleAliasesRequest {
  /**
   * <p>The maximum number of results to return at one time.</p>
   * @public
   */
  pageSize?: number;

  /**
   * <p>A marker used to get the next set of results.</p>
   * @public
   */
  marker?: string;

  /**
   * <p>Return the list of role aliases in ascending alphabetical order.</p>
   * @public
   */
  ascendingOrder?: boolean;
}

/**
 * @public
 */
export interface ListRoleAliasesResponse {
  /**
   * <p>The role aliases.</p>
   * @public
   */
  roleAliases?: string[];

  /**
   * <p>A marker used to get the next set of results.</p>
   * @public
   */
  nextMarker?: string;
}

/**
 * @public
 * @enum
 */
export const SbomValidationResult = {
  FAILED: "FAILED",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type SbomValidationResult = (typeof SbomValidationResult)[keyof typeof SbomValidationResult];

/**
 * @public
 */
export interface ListSbomValidationResultsRequest {
  /**
   * <p>The name of the new software package.</p>
   * @public
   */
  packageName: string | undefined;

  /**
   * <p>The name of the new package version.</p>
   * @public
   */
  versionName: string | undefined;

  /**
   * <p>The end result of the </p>
   * @public
   */
  validationResult?: SbomValidationResult;

  /**
   * <p>The maximum number of results to return at one time.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>A token that can be used to retrieve the next set of results, or null if there are no additional results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 * @enum
 */
export const SbomValidationErrorCode = {
  FILE_SIZE_LIMIT_EXCEEDED: "FILE_SIZE_LIMIT_EXCEEDED",
  INCOMPATIBLE_FORMAT: "INCOMPATIBLE_FORMAT",
} as const;

/**
 * @public
 */
export type SbomValidationErrorCode = (typeof SbomValidationErrorCode)[keyof typeof SbomValidationErrorCode];

/**
 * <p>A summary of the validation results for a specific software bill of materials (SBOM) attached to a software package version.</p>
 * @public
 */
export interface SbomValidationResultSummary {
  /**
   * <p>The name of the SBOM file.</p>
   * @public
   */
  fileName?: string;

  /**
   * <p>The end result of the SBOM validation.</p>
   * @public
   */
  validationResult?: SbomValidationResult;

  /**
   * <p>The <code>errorCode</code> representing the validation failure error if the SBOM
   *          validation failed.</p>
   * @public
   */
  errorCode?: SbomValidationErrorCode;

  /**
   * <p>The <code>errorMessage</code> representing the validation failure error if the SBOM
   *          validation failed.</p>
   * @public
   */
  errorMessage?: string;
}

/**
 * @public
 */
export interface ListSbomValidationResultsResponse {
  /**
   * <p>A summary of the validation results for each software bill of materials attached to a software package version.</p>
   * @public
   */
  validationResultSummaries?: SbomValidationResultSummary[];

  /**
   * <p>A token that can be used to retrieve the next set of results, or null if there are no additional results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListScheduledAuditsRequest {
  /**
   * <p>The token for the next set of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return at one time. The default is 25.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * <p>Information about the scheduled audit.</p>
 * @public
 */
export interface ScheduledAuditMetadata {
  /**
   * <p>The name of the scheduled audit.</p>
   * @public
   */
  scheduledAuditName?: string;

  /**
   * <p>The ARN of the scheduled audit.</p>
   * @public
   */
  scheduledAuditArn?: string;

  /**
   * <p>How often the scheduled audit occurs.</p>
   * @public
   */
  frequency?: AuditFrequency;

  /**
   * <p>The day of the month on which the scheduled audit is run (if the
   *           <code>frequency</code> is "MONTHLY").
   *         If days 29-31 are specified, and the month does not have that many
   *         days, the audit takes place on the "LAST" day of the month.</p>
   * @public
   */
  dayOfMonth?: string;

  /**
   * <p>The day of the week on which the scheduled audit is run (if the
   *           <code>frequency</code> is "WEEKLY" or "BIWEEKLY").</p>
   * @public
   */
  dayOfWeek?: DayOfWeek;
}

/**
 * @public
 */
export interface ListScheduledAuditsResponse {
  /**
   * <p>The list of scheduled audits.</p>
   * @public
   */
  scheduledAudits?: ScheduledAuditMetadata[];

  /**
   * <p>A token that can be used to retrieve the next set of results,
   *             or <code>null</code> if there are no additional results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListSecurityProfilesRequest {
  /**
   * <p>The token for the next set of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return at one time.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>A filter to limit results to the security profiles that use the defined dimension.
   *       Cannot be used with <code>metricName</code>
   *          </p>
   * @public
   */
  dimensionName?: string;

  /**
   * <p> The name of the custom metric.
   *       Cannot be used with <code>dimensionName</code>. </p>
   * @public
   */
  metricName?: string;
}

/**
 * <p>Identifying information for a Device Defender security profile.</p>
 * @public
 */
export interface SecurityProfileIdentifier {
  /**
   * <p>The name you've given to the security profile.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ARN of the security profile.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface ListSecurityProfilesResponse {
  /**
   * <p>A list of security profile identifiers (names and ARNs).</p>
   * @public
   */
  securityProfileIdentifiers?: SecurityProfileIdentifier[];

  /**
   * <p>A token that can be used to retrieve the next set of results, or <code>null</code> if there are no
   *         additional results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListSecurityProfilesForTargetRequest {
  /**
   * <p>The token for the next set of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return at one time.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>If true, return child groups too.</p>
   * @public
   */
  recursive?: boolean;

  /**
   * <p>The ARN of the target (thing group) whose attached security profiles you want to get.</p>
   * @public
   */
  securityProfileTargetArn: string | undefined;
}

/**
 * <p>A target to which an alert is sent when a security profile behavior is
 *           violated.</p>
 * @public
 */
export interface SecurityProfileTarget {
  /**
   * <p>The ARN of the security profile.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * <p>Information about a security profile and the target associated with it.</p>
 * @public
 */
export interface SecurityProfileTargetMapping {
  /**
   * <p>Information that identifies the security profile.</p>
   * @public
   */
  securityProfileIdentifier?: SecurityProfileIdentifier;

  /**
   * <p>Information about the target (thing group) associated with the security profile.</p>
   * @public
   */
  target?: SecurityProfileTarget;
}

/**
 * @public
 */
export interface ListSecurityProfilesForTargetResponse {
  /**
   * <p>A list of security profiles and their associated targets.</p>
   * @public
   */
  securityProfileTargetMappings?: SecurityProfileTargetMapping[];

  /**
   * <p>A token that can be used to retrieve the next set of results, or <code>null</code> if there are no
   *         additional results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListStreamsRequest {
  /**
   * <p>The maximum number of results to return at a time.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>A token used to get the next set of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Set to true to return the list of streams in ascending order.</p>
   * @public
   */
  ascendingOrder?: boolean;
}

/**
 * <p>A summary of a stream.</p>
 * @public
 */
export interface StreamSummary {
  /**
   * <p>The stream ID.</p>
   * @public
   */
  streamId?: string;

  /**
   * <p>The stream ARN.</p>
   * @public
   */
  streamArn?: string;

  /**
   * <p>The stream version.</p>
   * @public
   */
  streamVersion?: number;

  /**
   * <p>A description of the stream.</p>
   * @public
   */
  description?: string;
}

/**
 * @public
 */
export interface ListStreamsResponse {
  /**
   * <p>A list of streams.</p>
   * @public
   */
  streams?: StreamSummary[];

  /**
   * <p>A token used to get the next set of results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   * 			value from a previous response; otherwise <b>null</b> to receive
   * 			the first set of results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The list of tags assigned to the resource.</p>
   * @public
   */
  tags?: Tag[];

  /**
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTargetsForPolicyRequest {
  /**
   * <p>The policy name.</p>
   * @public
   */
  policyName: string | undefined;

  /**
   * <p>A marker used to get the next set of results.</p>
   * @public
   */
  marker?: string;

  /**
   * <p>The maximum number of results to return at one time.</p>
   * @public
   */
  pageSize?: number;
}

/**
 * @public
 */
export interface ListTargetsForPolicyResponse {
  /**
   * <p>The policy targets.</p>
   * @public
   */
  targets?: string[];

  /**
   * <p>A marker used to get the next set of results.</p>
   * @public
   */
  nextMarker?: string;
}

/**
 * @public
 */
export interface ListTargetsForSecurityProfileRequest {
  /**
   * <p>The security profile.</p>
   * @public
   */
  securityProfileName: string | undefined;

  /**
   * <p>The token for the next set of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return at one time.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListTargetsForSecurityProfileResponse {
  /**
   * <p>The thing groups to which the security profile is attached.</p>
   * @public
   */
  securityProfileTargets?: SecurityProfileTarget[];

  /**
   * <p>A token that can be used to retrieve the next set of results, or <code>null</code> if there are no
   *         additional results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListThingGroupsRequest {
  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   * 			value from a previous response; otherwise <b>null</b> to receive
   * 			the first set of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return at one time.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>A filter that limits the results to those with the specified parent group.</p>
   * @public
   */
  parentGroup?: string;

  /**
   * <p>A filter that limits the results to those with the specified name prefix.</p>
   * @public
   */
  namePrefixFilter?: string;

  /**
   * <p>If true, return child groups as well.</p>
   * @public
   */
  recursive?: boolean;
}

/**
 * @public
 */
export interface ListThingGroupsResponse {
  /**
   * <p>The thing groups.</p>
   * @public
   */
  thingGroups?: GroupNameAndArn[];

  /**
   * <p>The token to use to get the next set of results. Will not be returned if operation has returned all results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListThingGroupsForThingRequest {
  /**
   * <p>The thing name.</p>
   * @public
   */
  thingName: string | undefined;

  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   * 			value from a previous response; otherwise <b>null</b> to receive
   * 			the first set of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return at one time.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListThingGroupsForThingResponse {
  /**
   * <p>The thing groups.</p>
   * @public
   */
  thingGroups?: GroupNameAndArn[];

  /**
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>The input for the ListThingPrincipal operation.</p>
 * @public
 */
export interface ListThingPrincipalsRequest {
  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   * 			value from a previous response; otherwise <b>null</b> to receive
   * 			the first set of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return in this operation.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The name of the thing.</p>
   * @public
   */
  thingName: string | undefined;
}

/**
 * <p>The output from the ListThingPrincipals operation.</p>
 * @public
 */
export interface ListThingPrincipalsResponse {
  /**
   * <p>The principals associated with the thing.</p>
   * @public
   */
  principals?: string[];

  /**
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ReportType = {
  ERRORS: "ERRORS",
  RESULTS: "RESULTS",
} as const;

/**
 * @public
 */
export type ReportType = (typeof ReportType)[keyof typeof ReportType];

/**
 * @public
 */
export interface ListThingRegistrationTaskReportsRequest {
  /**
   * <p>The id of the task.</p>
   * @public
   */
  taskId: string | undefined;

  /**
   * <p>The type of task report.</p>
   * @public
   */
  reportType: ReportType | undefined;

  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   * 			value from a previous response; otherwise <b>null</b> to receive
   * 		the first set of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return per request.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListThingRegistrationTaskReportsResponse {
  /**
   * <p>Links to the task resources.</p>
   * @public
   */
  resourceLinks?: string[];

  /**
   * <p>The type of task report.</p>
   * @public
   */
  reportType?: ReportType;

  /**
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListThingRegistrationTasksRequest {
  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   * 			value from a previous response; otherwise <b>null</b> to receive
   * 			the first set of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return at one time.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The status of the bulk thing provisioning task.</p>
   * @public
   */
  status?: Status;
}

/**
 * @public
 */
export interface ListThingRegistrationTasksResponse {
  /**
   * <p>A list of bulk thing provisioning task IDs.</p>
   * @public
   */
  taskIds?: string[];

  /**
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>The input for the ListThings operation.</p>
 * @public
 */
export interface ListThingsRequest {
  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   * 			value from a previous response; otherwise <b>null</b> to receive
   * 			the first set of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return in this operation.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The attribute name used to search for things.</p>
   * @public
   */
  attributeName?: string;

  /**
   * <p>The attribute value used to search for things.</p>
   * @public
   */
  attributeValue?: string;

  /**
   * <p>The name of the thing type used to search for things.</p>
   * @public
   */
  thingTypeName?: string;

  /**
   * <p>When <code>true</code>, the action returns the thing resources with attribute values
   *                      that start with the <code>attributeValue</code> provided.</p>
   *          <p>When <code>false</code>, or not present, the action returns only the thing
   * 			resources with attribute values that match the entire <code>attributeValue</code>
   * 			provided. </p>
   * @public
   */
  usePrefixAttributeValue?: boolean;
}

/**
 * <p>The properties of the thing, including thing name, thing type name, and a list of thing
 * 			attributes.</p>
 * @public
 */
export interface ThingAttribute {
  /**
   * <p>The name of the thing.</p>
   * @public
   */
  thingName?: string;

  /**
   * <p>The name of the thing type, if the thing has been associated with a type.</p>
   * @public
   */
  thingTypeName?: string;

  /**
   * <p>The thing ARN.</p>
   * @public
   */
  thingArn?: string;

  /**
   * <p>A list of thing attributes which are name-value pairs.</p>
   * @public
   */
  attributes?: Record<string, string>;

  /**
   * <p>The version of the thing record in the registry.</p>
   * @public
   */
  version?: number;
}

/**
 * <p>The output from the ListThings operation.</p>
 * @public
 */
export interface ListThingsResponse {
  /**
   * <p>The things.</p>
   * @public
   */
  things?: ThingAttribute[];

  /**
   * <p>The token to use to get the next set of results. Will not be returned if operation has returned all results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListThingsInBillingGroupRequest {
  /**
   * <p>The name of the billing group.</p>
   * @public
   */
  billingGroupName: string | undefined;

  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   * 			value from a previous response; otherwise <b>null</b> to receive
   * 			the first set of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return per request.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListThingsInBillingGroupResponse {
  /**
   * <p>A list of things in the billing group.</p>
   * @public
   */
  things?: string[];

  /**
   * <p>The token to use to get the next set of results. Will not be returned if operation has returned all results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListThingsInThingGroupRequest {
  /**
   * <p>The thing group name.</p>
   * @public
   */
  thingGroupName: string | undefined;

  /**
   * <p>When true, list things in this thing group and in all child groups as
   * 			well.</p>
   * @public
   */
  recursive?: boolean;

  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   * 			value from a previous response; otherwise <b>null</b> to receive
   * 			the first set of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return at one time.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListThingsInThingGroupResponse {
  /**
   * <p>The things in the specified thing group.</p>
   * @public
   */
  things?: string[];

  /**
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>The input for the ListThingTypes operation.</p>
 * @public
 */
export interface ListThingTypesRequest {
  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   * 			value from a previous response; otherwise <b>null</b> to receive
   * 			the first set of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return in this operation.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The name of the thing type.</p>
   * @public
   */
  thingTypeName?: string;
}

/**
 * <p>The definition of the thing type, including thing type name and description.</p>
 * @public
 */
export interface ThingTypeDefinition {
  /**
   * <p>The name of the thing type.</p>
   * @public
   */
  thingTypeName?: string;

  /**
   * <p>The thing type ARN.</p>
   * @public
   */
  thingTypeArn?: string;

  /**
   * <p>The ThingTypeProperties for the thing type.</p>
   * @public
   */
  thingTypeProperties?: ThingTypeProperties;

  /**
   * <p>The ThingTypeMetadata contains additional information about the thing type including: creation date and
   * 			time, a value indicating whether the thing type is deprecated, and a date and time when it was
   * 			deprecated.</p>
   * @public
   */
  thingTypeMetadata?: ThingTypeMetadata;
}

/**
 * <p>The output for the ListThingTypes operation.</p>
 * @public
 */
export interface ListThingTypesResponse {
  /**
   * <p>The thing types.</p>
   * @public
   */
  thingTypes?: ThingTypeDefinition[];

  /**
   * <p>The token for the next set of results. Will not be returned if operation has returned all results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTopicRuleDestinationsRequest {
  /**
   * <p>The maximum number of results to return at one time.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   *          value from a previous response; otherwise <b>null</b> to receive
   *          the first set of results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>Information about an HTTP URL destination.</p>
 * @public
 */
export interface HttpUrlDestinationSummary {
  /**
   * <p>The URL used to confirm ownership of or access to the HTTP topic rule destination
   *          URL.</p>
   * @public
   */
  confirmationUrl?: string;
}

/**
 * <p>The summary of a virtual private cloud (VPC) destination.</p>
 * @public
 */
export interface VpcDestinationSummary {
  /**
   * <p>The subnet IDs of the VPC destination.</p>
   * @public
   */
  subnetIds?: string[];

  /**
   * <p>The security groups of the VPC destination.</p>
   * @public
   */
  securityGroups?: string[];

  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  vpcId?: string;

  /**
   * <p>The ARN of a role that has permission to create and attach to elastic network interfaces (ENIs).</p>
   * @public
   */
  roleArn?: string;
}

/**
 * <p>Information about the topic rule destination.</p>
 * @public
 */
export interface TopicRuleDestinationSummary {
  /**
   * <p>The topic rule destination ARN.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The status of the topic rule destination. Valid values are:</p>
   *          <dl>
   *             <dt>IN_PROGRESS</dt>
   *             <dd>
   *                <p>A topic rule destination was created but has not been confirmed. You can set
   *                      <code>status</code> to <code>IN_PROGRESS</code> by calling
   *                      <code>UpdateTopicRuleDestination</code>. Calling
   *                      <code>UpdateTopicRuleDestination</code> causes a new confirmation challenge to
   *                   be sent to your confirmation endpoint.</p>
   *             </dd>
   *             <dt>ENABLED</dt>
   *             <dd>
   *                <p>Confirmation was completed, and traffic to this destination is allowed. You can
   *                   set <code>status</code> to <code>DISABLED</code> by calling
   *                      <code>UpdateTopicRuleDestination</code>.</p>
   *             </dd>
   *             <dt>DISABLED</dt>
   *             <dd>
   *                <p>Confirmation was completed, and traffic to this destination is not allowed. You
   *                   can set <code>status</code> to <code>ENABLED</code> by calling
   *                      <code>UpdateTopicRuleDestination</code>.</p>
   *             </dd>
   *             <dt>ERROR</dt>
   *             <dd>
   *                <p>Confirmation could not be completed, for example if the confirmation timed out.
   *                   You can call <code>GetTopicRuleDestination</code> for details about the error. You
   *                   can set <code>status</code> to <code>IN_PROGRESS</code> by calling
   *                      <code>UpdateTopicRuleDestination</code>. Calling
   *                      <code>UpdateTopicRuleDestination</code> causes a new confirmation challenge to
   *                   be sent to your confirmation endpoint.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  status?: TopicRuleDestinationStatus;

  /**
   * <p>The date and time when the topic rule destination was created.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The date and time when the topic rule destination was last updated.</p>
   * @public
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The reason the topic rule destination is in the current status.</p>
   * @public
   */
  statusReason?: string;

  /**
   * <p>Information about the HTTP URL.</p>
   * @public
   */
  httpUrlSummary?: HttpUrlDestinationSummary;

  /**
   * <p>Information about the virtual private cloud (VPC) connection.</p>
   * @public
   */
  vpcDestinationSummary?: VpcDestinationSummary;
}

/**
 * @public
 */
export interface ListTopicRuleDestinationsResponse {
  /**
   * <p>Information about a topic rule destination.</p>
   * @public
   */
  destinationSummaries?: TopicRuleDestinationSummary[];

  /**
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>The input for the ListTopicRules operation.</p>
 * @public
 */
export interface ListTopicRulesRequest {
  /**
   * <p>The topic.</p>
   * @public
   */
  topic?: string;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   *          value from a previous response; otherwise <b>null</b> to receive
   *          the first set of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Specifies whether the rule is disabled.</p>
   * @public
   */
  ruleDisabled?: boolean;
}

/**
 * <p>Describes a rule.</p>
 * @public
 */
export interface TopicRuleListItem {
  /**
   * <p>The rule ARN.</p>
   * @public
   */
  ruleArn?: string;

  /**
   * <p>The name of the rule.</p>
   * @public
   */
  ruleName?: string;

  /**
   * <p>The pattern for the topic names that apply.</p>
   * @public
   */
  topicPattern?: string;

  /**
   * <p>The date and time the rule was created.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>Specifies whether the rule is disabled.</p>
   * @public
   */
  ruleDisabled?: boolean;
}

/**
 * <p>The output from the ListTopicRules operation.</p>
 * @public
 */
export interface ListTopicRulesResponse {
  /**
   * <p>The rules.</p>
   * @public
   */
  rules?: TopicRuleListItem[];

  /**
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListV2LoggingLevelsRequest {
  /**
   * <p>The type of resource for which you are configuring logging. Must be
   *             <code>THING_Group</code>.</p>
   * @public
   */
  targetType?: LogTargetType;

  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   *          value from a previous response; otherwise <b>null</b> to receive
   *          the first set of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return at one time.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * <p>A log target.</p>
 * @public
 */
export interface LogTarget {
  /**
   * <p>The target type.</p>
   * @public
   */
  targetType: LogTargetType | undefined;

  /**
   * <p>The target name.</p>
   * @public
   */
  targetName?: string;
}

/**
 * <p>The target configuration.</p>
 * @public
 */
export interface LogTargetConfiguration {
  /**
   * <p>A log target</p>
   * @public
   */
  logTarget?: LogTarget;

  /**
   * <p>The logging level.</p>
   * @public
   */
  logLevel?: LogLevel;
}

/**
 * @public
 */
export interface ListV2LoggingLevelsResponse {
  /**
   * <p>The logging configuration for a target.</p>
   * @public
   */
  logTargetConfigurations?: LogTargetConfiguration[];

  /**
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListViolationEventsRequest {
  /**
   * <p>The start time for the alerts to be listed.</p>
   * @public
   */
  startTime: Date | undefined;

  /**
   * <p>The end time for the alerts to be listed.</p>
   * @public
   */
  endTime: Date | undefined;

  /**
   * <p>A filter to limit results to those alerts caused by the specified thing.</p>
   * @public
   */
  thingName?: string;

  /**
   * <p>A filter to limit results to those alerts generated by the specified security profile.</p>
   * @public
   */
  securityProfileName?: string;

  /**
   * <p>
   *       The criteria for a behavior.
   *     </p>
   * @public
   */
  behaviorCriteriaType?: BehaviorCriteriaType;

  /**
   * <p>
   *       A list of all suppressed alerts.
   *     </p>
   * @public
   */
  listSuppressedAlerts?: boolean;

  /**
   * <p>The verification state of the violation (detect alarm).</p>
   * @public
   */
  verificationState?: VerificationState;

  /**
   * <p>The token for the next set of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return at one time.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * @public
 * @enum
 */
export const ViolationEventType = {
  ALARM_CLEARED: "alarm-cleared",
  ALARM_INVALIDATED: "alarm-invalidated",
  IN_ALARM: "in-alarm",
} as const;

/**
 * @public
 */
export type ViolationEventType = (typeof ViolationEventType)[keyof typeof ViolationEventType];

/**
 * <p>Information about a Device Defender security profile behavior violation.</p>
 * @public
 */
export interface ViolationEvent {
  /**
   * <p>The ID of the violation event.</p>
   * @public
   */
  violationId?: string;

  /**
   * <p>The name of the thing responsible for the violation event.</p>
   * @public
   */
  thingName?: string;

  /**
   * <p>The name of the security profile whose behavior was violated.</p>
   * @public
   */
  securityProfileName?: string;

  /**
   * <p>The behavior that was violated.</p>
   * @public
   */
  behavior?: Behavior;

  /**
   * <p>The value of the metric (the measurement).</p>
   * @public
   */
  metricValue?: MetricValue;

  /**
   * <p>
   *             The details of a violation event.
   *         </p>
   * @public
   */
  violationEventAdditionalInfo?: ViolationEventAdditionalInfo;

  /**
   * <p>The type of violation event.</p>
   * @public
   */
  violationEventType?: ViolationEventType;

  /**
   * <p>The verification state of the violation (detect alarm).</p>
   * @public
   */
  verificationState?: VerificationState;

  /**
   * <p>The description of the verification state of the violation.</p>
   * @public
   */
  verificationStateDescription?: string;

  /**
   * <p>The time the violation event occurred.</p>
   * @public
   */
  violationEventTime?: Date;
}

/**
 * @public
 */
export interface ListViolationEventsResponse {
  /**
   * <p>The security profile violation alerts issued for this account during the given time period,
   *       potentially filtered by security profile, behavior violated, or thing (device) violating.</p>
   * @public
   */
  violationEvents?: ViolationEvent[];

  /**
   * <p>A token that can be used to retrieve the next set of results, or <code>null</code> if there are no
   *         additional results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface PutVerificationStateOnViolationRequest {
  /**
   * <p>The violation ID.</p>
   * @public
   */
  violationId: string | undefined;

  /**
   * <p>The verification state of the violation.</p>
   * @public
   */
  verificationState: VerificationState | undefined;

  /**
   * <p>The description of the verification state of the violation (detect alarm).</p>
   * @public
   */
  verificationStateDescription?: string;
}

/**
 * @public
 */
export interface PutVerificationStateOnViolationResponse {}

/**
 * <p>The input to the RegisterCACertificate operation.</p>
 * @public
 */
export interface RegisterCACertificateRequest {
  /**
   * <p>The CA certificate.</p>
   * @public
   */
  caCertificate: string | undefined;

  /**
   * <p>The private key verification certificate. If <code>certificateMode</code> is
   *             <code>SNI_ONLY</code>, the <code>verificationCertificate</code> field must be empty. If
   *             <code>certificateMode</code> is <code>DEFAULT</code> or not provided, the
   *             <code>verificationCertificate</code> field must not be empty. </p>
   * @public
   */
  verificationCertificate?: string;

  /**
   * <p>A boolean value that specifies if the CA certificate is set to active.</p>
   *          <p>Valid values: <code>ACTIVE | INACTIVE</code>
   *          </p>
   * @public
   */
  setAsActive?: boolean;

  /**
   * <p>Allows this CA certificate to be used for auto registration of device
   *          certificates.</p>
   * @public
   */
  allowAutoRegistration?: boolean;

  /**
   * <p>Information about the registration configuration.</p>
   * @public
   */
  registrationConfig?: RegistrationConfig;

  /**
   * <p>Metadata which can be used to manage the CA certificate.</p>
   *          <note>
   *             <p>For URI Request parameters use format: ...key1=value1&key2=value2...</p>
   *             <p>For the CLI command-line parameter use format: &&tags
   *             "key1=value1&key2=value2..."</p>
   *             <p>For the cli-input-json file use format: "tags":
   *             "key1=value1&key2=value2..."</p>
   *          </note>
   * @public
   */
  tags?: Tag[];

  /**
   * <p>Describes the certificate mode in which the Certificate Authority (CA) will be
   *          registered. If the <code>verificationCertificate</code> field is not provided, set <code>certificateMode</code> to be <code>SNI_ONLY</code>.
   *          If the <code>verificationCertificate</code> field is provided, set <code>certificateMode</code> to be <code>DEFAULT</code>.
   *          When <code>certificateMode</code> is not provided, it defaults to <code>DEFAULT</code>.
   *          All the device certificates that are registered using this CA will be registered in the same certificate mode as the CA.
   *          For more information about certificate mode for device certificates, see
   *          <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_CertificateDescription.html#iot-Type-CertificateDescription-certificateMode">
   *             certificate mode</a>.
   *       </p>
   * @public
   */
  certificateMode?: CertificateMode;
}

/**
 * <p>The output from the RegisterCACertificateResponse operation.</p>
 * @public
 */
export interface RegisterCACertificateResponse {
  /**
   * <p>The CA certificate ARN.</p>
   * @public
   */
  certificateArn?: string;

  /**
   * <p>The CA certificate identifier.</p>
   * @public
   */
  certificateId?: string;
}

/**
 * <p>The registration code is invalid.</p>
 * @public
 */
export class RegistrationCodeValidationException extends __BaseException {
  readonly name: "RegistrationCodeValidationException" = "RegistrationCodeValidationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RegistrationCodeValidationException, __BaseException>) {
    super({
      name: "RegistrationCodeValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RegistrationCodeValidationException.prototype);
  }
}

/**
 * <p>Unable to verify the CA certificate used to sign the device certificate you are
 *          attempting to register. This is happens when you have registered more than one CA
 *          certificate that has the same subject field and public key.</p>
 * @public
 */
export class CertificateConflictException extends __BaseException {
  readonly name: "CertificateConflictException" = "CertificateConflictException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CertificateConflictException, __BaseException>) {
    super({
      name: "CertificateConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CertificateConflictException.prototype);
  }
}

/**
 * <p>The input to the RegisterCertificate operation.</p>
 * @public
 */
export interface RegisterCertificateRequest {
  /**
   * <p>The certificate data, in PEM format.</p>
   * @public
   */
  certificatePem: string | undefined;

  /**
   * <p>The CA certificate used to sign the device certificate being registered.</p>
   * @public
   */
  caCertificatePem?: string;

  /**
   * @deprecated
   *
   * <p>A boolean value that specifies if the certificate is set to active.</p>
   *          <p>Valid values: <code>ACTIVE | INACTIVE</code>
   *          </p>
   * @public
   */
  setAsActive?: boolean;

  /**
   * <p>The status of the register certificate request. Valid values that you can use include
   *          <code>ACTIVE</code>, <code>INACTIVE</code>, and <code>REVOKED</code>.</p>
   * @public
   */
  status?: CertificateStatus;
}

/**
 * <p>The output from the RegisterCertificate operation.</p>
 * @public
 */
export interface RegisterCertificateResponse {
  /**
   * <p>The certificate ARN.</p>
   * @public
   */
  certificateArn?: string;

  /**
   * <p>The certificate identifier.</p>
   * @public
   */
  certificateId?: string;
}

/**
 * @public
 */
export interface RegisterCertificateWithoutCARequest {
  /**
   * <p>The certificate data, in PEM format.</p>
   * @public
   */
  certificatePem: string | undefined;

  /**
   * <p>The status of the register certificate request.</p>
   * @public
   */
  status?: CertificateStatus;
}

/**
 * @public
 */
export interface RegisterCertificateWithoutCAResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the registered certificate.</p>
   * @public
   */
  certificateArn?: string;

  /**
   * <p>The ID of the registered certificate. (The last part of the certificate ARN contains the
   *          certificate ID.</p>
   * @public
   */
  certificateId?: string;
}

/**
 * @public
 */
export interface RegisterThingRequest {
  /**
   * <p>The provisioning template. See <a href="https://docs.aws.amazon.com/iot/latest/developerguide/provision-w-cert.html">Provisioning Devices That Have Device Certificates</a> for more information.</p>
   * @public
   */
  templateBody: string | undefined;

  /**
   * <p>The parameters for provisioning a thing. See <a href="https://docs.aws.amazon.com/iot/latest/developerguide/provision-template.html">Provisioning Templates</a> for more information.</p>
   * @public
   */
  parameters?: Record<string, string>;
}

/**
 * @public
 */
export interface RegisterThingResponse {
  /**
   * <p>The certificate data, in PEM format.</p>
   * @public
   */
  certificatePem?: string;

  /**
   * <p>ARNs for the generated resources.</p>
   * @public
   */
  resourceArns?: Record<string, string>;
}

/**
 * <p>The resource registration failed.</p>
 * @public
 */
export class ResourceRegistrationFailureException extends __BaseException {
  readonly name: "ResourceRegistrationFailureException" = "ResourceRegistrationFailureException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceRegistrationFailureException, __BaseException>) {
    super({
      name: "ResourceRegistrationFailureException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceRegistrationFailureException.prototype);
  }
}

/**
 * <p>The input for the RejectCertificateTransfer operation.</p>
 * @public
 */
export interface RejectCertificateTransferRequest {
  /**
   * <p>The ID of the certificate. (The last part of the certificate ARN contains the
   *          certificate ID.)</p>
   * @public
   */
  certificateId: string | undefined;

  /**
   * <p>The reason the certificate transfer was rejected.</p>
   * @public
   */
  rejectReason?: string;
}

/**
 * @public
 */
export interface RemoveThingFromBillingGroupRequest {
  /**
   * <p>The name of the billing group.</p>
   * @public
   */
  billingGroupName?: string;

  /**
   * <p>The ARN of the billing group.</p>
   * @public
   */
  billingGroupArn?: string;

  /**
   * <p>The name of the thing to be removed from the billing group.</p>
   * @public
   */
  thingName?: string;

  /**
   * <p>The ARN of the thing to be removed from the billing group.</p>
   * @public
   */
  thingArn?: string;
}

/**
 * @public
 */
export interface RemoveThingFromBillingGroupResponse {}

/**
 * @public
 */
export interface RemoveThingFromThingGroupRequest {
  /**
   * <p>The group name.</p>
   * @public
   */
  thingGroupName?: string;

  /**
   * <p>The group ARN.</p>
   * @public
   */
  thingGroupArn?: string;

  /**
   * <p>The name of the thing to remove from the group.</p>
   * @public
   */
  thingName?: string;

  /**
   * <p>The ARN of the thing to remove from the group.</p>
   * @public
   */
  thingArn?: string;
}

/**
 * @public
 */
export interface RemoveThingFromThingGroupResponse {}

/**
 * <p>The input for the ReplaceTopicRule operation.</p>
 * @public
 */
export interface ReplaceTopicRuleRequest {
  /**
   * <p>The name of the rule.</p>
   * @public
   */
  ruleName: string | undefined;

  /**
   * <p>The rule payload.</p>
   * @public
   */
  topicRulePayload: TopicRulePayload | undefined;
}

/**
 * @public
 */
export interface SearchIndexRequest {
  /**
   * <p>The search index name.</p>
   * @public
   */
  indexName?: string;

  /**
   * <p>The search query string. For more information about the search query syntax, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/query-syntax.html">Query
   *       syntax</a>.</p>
   * @public
   */
  queryString: string | undefined;

  /**
   * <p>The token used to get the next set of results, or <code>null</code> if there are no additional
   *       results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return per page at one time. This maximum number
   *       cannot exceed 100. The response might contain fewer results but will never contain more. You
   *       can use <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_SearchIndex.html#iot-SearchIndex-request-nextToken">
   *                <code>nextToken</code>
   *             </a> to retrieve the next set of results until
   *         <code>nextToken</code> returns <code>NULL</code>.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The query version.</p>
   * @public
   */
  queryVersion?: string;
}

/**
 * <p>The thing group search index document.</p>
 * @public
 */
export interface ThingGroupDocument {
  /**
   * <p>The thing group name.</p>
   * @public
   */
  thingGroupName?: string;

  /**
   * <p>The thing group ID.</p>
   * @public
   */
  thingGroupId?: string;

  /**
   * <p>The thing group description.</p>
   * @public
   */
  thingGroupDescription?: string;

  /**
   * <p>The thing group attributes.</p>
   * @public
   */
  attributes?: Record<string, string>;

  /**
   * <p>Parent group names.</p>
   * @public
   */
  parentGroupNames?: string[];
}

/**
 * <p>The connectivity status of the thing.</p>
 * @public
 */
export interface ThingConnectivity {
  /**
   * <p>True if the thing is connected to the Amazon Web Services IoT Core service; false if it is not
   *       connected.</p>
   * @public
   */
  connected?: boolean;

  /**
   * <p>The epoch time (in milliseconds) when the thing last connected or disconnected. If the
   *       thing has been disconnected for approximately an hour, the time value might be missing.</p>
   * @public
   */
  timestamp?: number;

  /**
   * <p>The reason why the client is disconnected. If the thing has been disconnected for approximately an hour, the <code>disconnectReason</code> value might be missing.</p>
   * @public
   */
  disconnectReason?: string;
}

/**
 * <p>The thing search index document.</p>
 * @public
 */
export interface ThingDocument {
  /**
   * <p>The thing name.</p>
   * @public
   */
  thingName?: string;

  /**
   * <p>The thing ID.</p>
   * @public
   */
  thingId?: string;

  /**
   * <p>The thing type name.</p>
   * @public
   */
  thingTypeName?: string;

  /**
   * <p>Thing group names.</p>
   * @public
   */
  thingGroupNames?: string[];

  /**
   * <p>The attributes.</p>
   * @public
   */
  attributes?: Record<string, string>;

  /**
   * <p>The unnamed shadow and named shadow.</p>
   *          <p>For more information about shadows, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/iot-device-shadows.html">IoT Device Shadow service.</a>
   *          </p>
   * @public
   */
  shadow?: string;

  /**
   * <p>Contains Device Defender data.</p>
   *          <p>For more information about Device Defender, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/device-defender.html">Device Defender</a>. </p>
   * @public
   */
  deviceDefender?: string;

  /**
   * <p>Indicates whether the thing is connected to the Amazon Web Services IoT Core service.</p>
   * @public
   */
  connectivity?: ThingConnectivity;
}

/**
 * @public
 */
export interface SearchIndexResponse {
  /**
   * <p>The token used to get the next set of results, or <code>null</code> if there are no additional
   *       results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The things that match the search query.</p>
   * @public
   */
  things?: ThingDocument[];

  /**
   * <p>The thing groups that match the search query.</p>
   * @public
   */
  thingGroups?: ThingGroupDocument[];
}

/**
 * @public
 */
export interface SetDefaultAuthorizerRequest {
  /**
   * <p>The authorizer name.</p>
   * @public
   */
  authorizerName: string | undefined;
}

/**
 * @public
 */
export interface SetDefaultAuthorizerResponse {
  /**
   * <p>The authorizer name.</p>
   * @public
   */
  authorizerName?: string;

  /**
   * <p>The authorizer ARN.</p>
   * @public
   */
  authorizerArn?: string;
}

/**
 * <p>The input for the SetDefaultPolicyVersion operation.</p>
 * @public
 */
export interface SetDefaultPolicyVersionRequest {
  /**
   * <p>The policy name.</p>
   * @public
   */
  policyName: string | undefined;

  /**
   * <p>The policy version ID.</p>
   * @public
   */
  policyVersionId: string | undefined;
}

/**
 * <p>Describes the logging options payload.</p>
 * @public
 */
export interface LoggingOptionsPayload {
  /**
   * <p>The ARN of the IAM role that grants access.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The log level.</p>
   * @public
   */
  logLevel?: LogLevel;
}

/**
 * <p>The input for the SetLoggingOptions operation.</p>
 * @public
 */
export interface SetLoggingOptionsRequest {
  /**
   * <p>The logging options payload.</p>
   * @public
   */
  loggingOptionsPayload: LoggingOptionsPayload | undefined;
}

/**
 * @public
 */
export interface SetV2LoggingLevelRequest {
  /**
   * <p>The log target.</p>
   * @public
   */
  logTarget: LogTarget | undefined;

  /**
   * <p>The log level.</p>
   * @public
   */
  logLevel: LogLevel | undefined;
}

/**
 * @public
 */
export interface SetV2LoggingOptionsRequest {
  /**
   * <p>The ARN of the role that allows IoT to write to Cloudwatch logs.</p>
   * @public
   */
  roleArn?: string;

  /**
   * <p>The default logging level.</p>
   * @public
   */
  defaultLogLevel?: LogLevel;

  /**
   * <p>If true all logs are disabled. The default is false.</p>
   * @public
   */
  disableAllLogs?: boolean;
}

/**
 * @public
 */
export interface StartAuditMitigationActionsTaskRequest {
  /**
   * <p>A unique identifier for the task. You can use this identifier to check the status of the task or to cancel it.</p>
   * @public
   */
  taskId: string | undefined;

  /**
   * <p>Specifies the audit findings to which the mitigation actions are applied. You can apply
   *       them to a type of audit check, to all findings from an audit, or to a
   *       specific set of
   *       findings.</p>
   * @public
   */
  target: AuditMitigationActionsTaskTarget | undefined;

  /**
   * <p>For an audit check, specifies which mitigation actions to apply. Those actions must be defined in your Amazon Web Services accounts.</p>
   * @public
   */
  auditCheckToActionsMapping: Record<string, string[]> | undefined;

  /**
   * <p>Each audit mitigation task must have a unique client request token. If you try to start a new task with the same token as a task that already exists, an exception occurs. If you omit this value, a unique client request token is generated automatically.</p>
   * @public
   */
  clientRequestToken?: string;
}

/**
 * @public
 */
export interface StartAuditMitigationActionsTaskResponse {
  /**
   * <p>The unique identifier for the audit mitigation task. This matches the <code>taskId</code> that you specified in the request.</p>
   * @public
   */
  taskId?: string;
}

/**
 * <p>
 *             This exception occurs if you attempt to start a task with the same task-id as an existing task but with a different clientRequestToken.
 *         </p>
 * @public
 */
export class TaskAlreadyExistsException extends __BaseException {
  readonly name: "TaskAlreadyExistsException" = "TaskAlreadyExistsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TaskAlreadyExistsException, __BaseException>) {
    super({
      name: "TaskAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TaskAlreadyExistsException.prototype);
  }
}

/**
 * @public
 */
export interface StartDetectMitigationActionsTaskRequest {
  /**
   * <p>
   *       The unique identifier of the task.
   *     </p>
   * @public
   */
  taskId: string | undefined;

  /**
   * <p>
   *       Specifies the ML Detect findings to which the mitigation actions are applied.
   *     </p>
   * @public
   */
  target: DetectMitigationActionsTaskTarget | undefined;

  /**
   * <p>
   *       The actions to be performed when a device has unexpected behavior.
   *     </p>
   * @public
   */
  actions: string[] | undefined;

  /**
   * <p>
   *       Specifies the time period of which violation events occurred between.
   *     </p>
   * @public
   */
  violationEventOccurrenceRange?: ViolationEventOccurrenceRange;

  /**
   * <p>
   *       Specifies to list only active violations.
   *     </p>
   * @public
   */
  includeOnlyActiveViolations?: boolean;

  /**
   * <p>
   *       Specifies to include suppressed alerts.
   *     </p>
   * @public
   */
  includeSuppressedAlerts?: boolean;

  /**
   * <p>
   *       Each mitigation action task must have a unique client request token. If you try to create a new task with the same token as a task that already exists, an exception occurs. If you omit this value, Amazon Web Services SDKs will automatically generate a unique client request.
   *     </p>
   * @public
   */
  clientRequestToken?: string;
}

/**
 * @public
 */
export interface StartDetectMitigationActionsTaskResponse {
  /**
   * <p>
   *       The unique identifier of the task.
   *     </p>
   * @public
   */
  taskId?: string;
}

/**
 * @public
 */
export interface StartOnDemandAuditTaskRequest {
  /**
   * <p>Which checks are performed during the audit. The checks you specify must be enabled
   *             for your account or an exception occurs. Use <code>DescribeAccountAuditConfiguration</code>
   *             to see the list of all checks, including those that are enabled or
   *             <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.</p>
   * @public
   */
  targetCheckNames: string[] | undefined;
}

/**
 * @public
 */
export interface StartOnDemandAuditTaskResponse {
  /**
   * <p>The ID of the on-demand audit you started.</p>
   * @public
   */
  taskId?: string;
}

/**
 * @public
 */
export interface StartThingRegistrationTaskRequest {
  /**
   * <p>The provisioning template.</p>
   * @public
   */
  templateBody: string | undefined;

  /**
   * <p>The S3 bucket that contains the input file.</p>
   * @public
   */
  inputFileBucket: string | undefined;

  /**
   * <p>The name of input file within the S3 bucket. This file contains a newline delimited
   * 			JSON file. Each line contains the parameter values to provision one device
   * 			(thing).</p>
   * @public
   */
  inputFileKey: string | undefined;

  /**
   * <p>The IAM role ARN that grants permission the input file.</p>
   * @public
   */
  roleArn: string | undefined;
}

/**
 * @public
 */
export interface StartThingRegistrationTaskResponse {
  /**
   * <p>The bulk thing provisioning task ID.</p>
   * @public
   */
  taskId?: string;
}

/**
 * @public
 */
export interface StopThingRegistrationTaskRequest {
  /**
   * <p>The bulk thing provisioning task ID.</p>
   * @public
   */
  taskId: string | undefined;
}

/**
 * @public
 */
export interface StopThingRegistrationTaskResponse {}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The new or modified tags for the resource.</p>
   * @public
   */
  tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface TestAuthorizationRequest {
  /**
   * <p>The principal. Valid principals are CertificateArn (arn:aws:iot:<i>region</i>:<i>accountId</i>:cert/<i>certificateId</i>), thingGroupArn (arn:aws:iot:<i>region</i>:<i>accountId</i>:thinggroup/<i>groupName</i>) and CognitoId (<i>region</i>:<i>id</i>).</p>
   * @public
   */
  principal?: string;

  /**
   * <p>The Cognito identity pool ID.</p>
   * @public
   */
  cognitoIdentityPoolId?: string;

  /**
   * <p>A list of authorization info objects. Simulating authorization will create a response
   *          for each <code>authInfo</code> object in the list.</p>
   * @public
   */
  authInfos: AuthInfo[] | undefined;

  /**
   * <p>The MQTT client ID.</p>
   * @public
   */
  clientId?: string;

  /**
   * <p>When testing custom authorization, the policies specified here are treated as if they
   *          are attached to the principal being authorized.</p>
   * @public
   */
  policyNamesToAdd?: string[];

  /**
   * <p>When testing custom authorization, the policies specified here are treated as if they
   *          are not attached to the principal being authorized.</p>
   * @public
   */
  policyNamesToSkip?: string[];
}

/**
 * @public
 */
export interface TestAuthorizationResponse {
  /**
   * <p>The authentication results.</p>
   * @public
   */
  authResults?: AuthResult[];
}

/**
 * <p>The response is invalid.</p>
 * @public
 */
export class InvalidResponseException extends __BaseException {
  readonly name: "InvalidResponseException" = "InvalidResponseException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidResponseException, __BaseException>) {
    super({
      name: "InvalidResponseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidResponseException.prototype);
  }
}

/**
 * <p>Specifies the HTTP context to use for the test authorizer request.</p>
 * @public
 */
export interface HttpContext {
  /**
   * <p>The header keys and values in an HTTP authorization request.</p>
   * @public
   */
  headers?: Record<string, string>;

  /**
   * <p>The query string keys and values in an HTTP authorization request.</p>
   * @public
   */
  queryString?: string;
}

/**
 * <p>Specifies the MQTT context to use for the test authorizer request</p>
 * @public
 */
export interface MqttContext {
  /**
   * <p>The value of the <code>username</code> key in an MQTT authorization request.</p>
   * @public
   */
  username?: string;

  /**
   * <p>The value of the <code>password</code> key in an MQTT authorization request.</p>
   * @public
   */
  password?: Uint8Array;

  /**
   * <p>The value of the <code>clientId</code> key in an MQTT authorization request.</p>
   * @public
   */
  clientId?: string;
}

/**
 * <p>Specifies the TLS context to use for the test authorizer request.</p>
 * @public
 */
export interface TlsContext {
  /**
   * <p>The value of the <code>serverName</code> key in a TLS authorization request.</p>
   * @public
   */
  serverName?: string;
}

/**
 * @public
 */
export interface TestInvokeAuthorizerRequest {
  /**
   * <p>The custom authorizer name.</p>
   * @public
   */
  authorizerName: string | undefined;

  /**
   * <p>The token returned by your custom authentication service.</p>
   * @public
   */
  token?: string;

  /**
   * <p>The signature made with the token and your custom authentication service's private
   *          key. This value must be Base-64-encoded.</p>
   * @public
   */
  tokenSignature?: string;

  /**
   * <p>Specifies a test HTTP authorization request.</p>
   * @public
   */
  httpContext?: HttpContext;

  /**
   * <p>Specifies a test MQTT authorization request.</p>
   * @public
   */
  mqttContext?: MqttContext;

  /**
   * <p>Specifies a test TLS authorization request.</p>
   * @public
   */
  tlsContext?: TlsContext;
}

/**
 * @public
 */
export interface TestInvokeAuthorizerResponse {
  /**
   * <p>True if the token is authenticated, otherwise false.</p>
   * @public
   */
  isAuthenticated?: boolean;

  /**
   * <p>The principal ID.</p>
   * @public
   */
  principalId?: string;

  /**
   * <p>IAM policy documents.</p>
   * @public
   */
  policyDocuments?: string[];

  /**
   * <p>The number of seconds after which the temporary credentials are refreshed.</p>
   * @public
   */
  refreshAfterInSeconds?: number;

  /**
   * <p>The number of seconds after which the connection is terminated.</p>
   * @public
   */
  disconnectAfterInSeconds?: number;
}

/**
 * <p>The input for the TransferCertificate operation.</p>
 * @public
 */
export interface TransferCertificateRequest {
  /**
   * <p>The ID of the certificate. (The last part of the certificate ARN contains the
   *          certificate ID.)</p>
   * @public
   */
  certificateId: string | undefined;

  /**
   * <p>The Amazon Web Services account.</p>
   * @public
   */
  targetAwsAccount: string | undefined;

  /**
   * <p>The transfer message.</p>
   * @public
   */
  transferMessage?: string;
}

/**
 * <p>The output from the TransferCertificate operation.</p>
 * @public
 */
export interface TransferCertificateResponse {
  /**
   * <p>The ARN of the certificate.</p>
   * @public
   */
  transferredCertificateArn?: string;
}

/**
 * <p>You can't transfer the certificate because authorization policies are still
 *          attached.</p>
 * @public
 */
export class TransferConflictException extends __BaseException {
  readonly name: "TransferConflictException" = "TransferConflictException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TransferConflictException, __BaseException>) {
    super({
      name: "TransferConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TransferConflictException.prototype);
  }
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of the keys of the tags to be removed from the resource.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateAccountAuditConfigurationRequest {
  /**
   * <p>The Amazon
   *       Resource Name
   *       (ARN)
   *       of the role that grants permission
   *       to
   *       IoT to access information about your devices, policies,
   *       certificates,
   *       and other items as required when performing an audit.</p>
   * @public
   */
  roleArn?: string;

  /**
   * <p>Information about the targets to which audit notifications are sent.</p>
   * @public
   */
  auditNotificationTargetConfigurations?: Partial<Record<AuditNotificationType, AuditNotificationTarget>>;

  /**
   * <p>Specifies which audit checks are enabled and disabled for this account. Use
   *             <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those
   *             that are currently enabled.</p>
   *          <p>Some data collection might start immediately when certain checks are enabled.
   *             When a check is disabled, any data collected so far in relation to the check is deleted.</p>
   *          <p>You
   *       cannot
   *       disable a check if
   *       it's
   *       used by any scheduled audit. You must first delete the check from the scheduled audit or
   *       delete the scheduled audit itself.</p>
   *          <p>On the first call to <code>UpdateAccountAuditConfiguration</code>,
   *             this parameter is required and must specify at least one enabled check.</p>
   * @public
   */
  auditCheckConfigurations?: Record<string, AuditCheckConfiguration>;
}

/**
 * @public
 */
export interface UpdateAccountAuditConfigurationResponse {}

/**
 * @public
 */
export interface UpdateAuditSuppressionRequest {
  /**
   * <p>An audit check name. Checks must be enabled
   *         for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list
   *         of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code>
   *         to select which checks are enabled.)</p>
   * @public
   */
  checkName: string | undefined;

  /**
   * <p>Information that identifies the noncompliant resource.</p>
   * @public
   */
  resourceIdentifier: ResourceIdentifier | undefined;

  /**
   * <p>
   *       The expiration date (epoch timestamp in seconds) that you want the suppression to adhere to.
   *     </p>
   * @public
   */
  expirationDate?: Date;

  /**
   * <p>
   *       Indicates whether a suppression should exist indefinitely or not.
   *     </p>
   * @public
   */
  suppressIndefinitely?: boolean;

  /**
   * <p>
   *       The description of the audit suppression.
   *     </p>
   * @public
   */
  description?: string;
}

/**
 * @public
 */
export interface UpdateAuditSuppressionResponse {}

/**
 * @public
 */
export interface UpdateAuthorizerRequest {
  /**
   * <p>The authorizer name.</p>
   * @public
   */
  authorizerName: string | undefined;

  /**
   * <p>The ARN of the authorizer's Lambda function.</p>
   * @public
   */
  authorizerFunctionArn?: string;

  /**
   * <p>The key used to extract the token from the HTTP headers. </p>
   * @public
   */
  tokenKeyName?: string;

  /**
   * <p>The public keys used to verify the token signature.</p>
   * @public
   */
  tokenSigningPublicKeys?: Record<string, string>;

  /**
   * <p>The status of the update authorizer request.</p>
   * @public
   */
  status?: AuthorizerStatus;

  /**
   * <p>When <code>true</code>, the result from the authorizer’s Lambda function is
   * 	  cached for the time specified in <code>refreshAfterInSeconds</code>. The cached
   * 	  result is used while the device reuses the same HTTP connection.</p>
   * @public
   */
  enableCachingForHttp?: boolean;
}

/**
 * @public
 */
export interface UpdateAuthorizerResponse {
  /**
   * <p>The authorizer name.</p>
   * @public
   */
  authorizerName?: string;

  /**
   * <p>The authorizer ARN.</p>
   * @public
   */
  authorizerArn?: string;
}

/**
 * @public
 */
export interface UpdateBillingGroupRequest {
  /**
   * <p>The name of the billing group.</p>
   * @public
   */
  billingGroupName: string | undefined;

  /**
   * <p>The properties of the billing group.</p>
   * @public
   */
  billingGroupProperties: BillingGroupProperties | undefined;

  /**
   * <p>The expected version of the billing group. If the version of the billing group does
   * 			not match the expected version specified in the request, the
   * 				<code>UpdateBillingGroup</code> request is rejected with a
   * 				<code>VersionConflictException</code>.</p>
   * @public
   */
  expectedVersion?: number;
}

/**
 * @public
 */
export interface UpdateBillingGroupResponse {
  /**
   * <p>The latest version of the billing group.</p>
   * @public
   */
  version?: number;
}

/**
 * <p>The input to the UpdateCACertificate operation.</p>
 * @public
 */
export interface UpdateCACertificateRequest {
  /**
   * <p>The CA certificate identifier.</p>
   * @public
   */
  certificateId: string | undefined;

  /**
   * <p>The updated status of the CA certificate.</p>
   *          <p>
   *             <b>Note:</b> The status value REGISTER_INACTIVE is deprecated and
   *          should not be used.</p>
   * @public
   */
  newStatus?: CACertificateStatus;

  /**
   * <p>The new value for the auto registration status. Valid values are: "ENABLE" or
   *          "DISABLE".</p>
   * @public
   */
  newAutoRegistrationStatus?: AutoRegistrationStatus;

  /**
   * <p>Information about the registration configuration.</p>
   * @public
   */
  registrationConfig?: RegistrationConfig;

  /**
   * <p>If true, removes auto registration.</p>
   * @public
   */
  removeAutoRegistration?: boolean;
}

/**
 * <p>The input for the UpdateCertificate operation.</p>
 * @public
 */
export interface UpdateCertificateRequest {
  /**
   * <p>The ID of the certificate. (The last part of the certificate ARN contains the
   *          certificate ID.)</p>
   * @public
   */
  certificateId: string | undefined;

  /**
   * <p>The new status.</p>
   *          <p>
   *             <b>Note:</b> Setting the status to PENDING_TRANSFER  or PENDING_ACTIVATION will result
   *          in an exception being thrown. PENDING_TRANSFER and PENDING_ACTIVATION are statuses used internally by IoT. They
   *          are not intended for developer use.</p>
   *          <p>
   *             <b>Note:</b> The status value REGISTER_INACTIVE is deprecated and
   *          should not be used.</p>
   * @public
   */
  newStatus: CertificateStatus | undefined;
}

/**
 * @public
 */
export interface UpdateCertificateProviderRequest {
  /**
   * <p>The name of the certificate provider.</p>
   * @public
   */
  certificateProviderName: string | undefined;

  /**
   * <p>The Lambda function ARN that's associated with the certificate provider.</p>
   * @public
   */
  lambdaFunctionArn?: string;

  /**
   * <p>A list of the operations that the certificate provider will use to generate certificates.
   *          Valid value: <code>CreateCertificateFromCsr</code>.</p>
   * @public
   */
  accountDefaultForOperations?: CertificateProviderOperation[];
}

/**
 * @public
 */
export interface UpdateCertificateProviderResponse {
  /**
   * <p>The name of the certificate provider.</p>
   * @public
   */
  certificateProviderName?: string;

  /**
   * <p>The ARN of the certificate provider.</p>
   * @public
   */
  certificateProviderArn?: string;
}

/**
 * @public
 */
export interface UpdateCustomMetricRequest {
  /**
   * <p> The name of the custom metric.
   *       Cannot be updated. </p>
   * @public
   */
  metricName: string | undefined;

  /**
   * <p>
   *       Field
   *       represents a friendly name in the console for the custom metric,
   *       it
   *       doesn't have to be unique. Don't use this name as the metric identifier in
   *       the device metric report.
   *       Can
   *       be updated. </p>
   * @public
   */
  displayName: string | undefined;
}

/**
 * @public
 */
export interface UpdateCustomMetricResponse {
  /**
   * <p>
   *       The name of the custom metric.
   *     </p>
   * @public
   */
  metricName?: string;

  /**
   * <p>
   *       The Amazon Resource Number (ARN) of the custom metric.
   *     </p>
   * @public
   */
  metricArn?: string;

  /**
   * <p> The type of the custom metric. </p>
   *          <important>
   *             <p>The type <code>number</code> only takes a single metric value as an input, but while submitting the metrics value in the DeviceMetrics report, it must be passed as an array with a single value.</p>
   *          </important>
   * @public
   */
  metricType?: CustomMetricType;

  /**
   * <p>
   *       A friendly name in the console for the custom metric
   *     </p>
   * @public
   */
  displayName?: string;

  /**
   * <p>
   *       The creation date of the custom metric in milliseconds since epoch.
   *     </p>
   * @public
   */
  creationDate?: Date;

  /**
   * <p>
   *       The time the custom metric was last modified in milliseconds since epoch.
   *     </p>
   * @public
   */
  lastModifiedDate?: Date;
}

/**
 * @public
 */
export interface UpdateDimensionRequest {
  /**
   * <p>A unique identifier for the dimension. Choose something that describes the type and value to make it easy to remember what it does.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Specifies the value or list of values for the dimension. For <code>TOPIC_FILTER</code> dimensions, this is a pattern used to match the MQTT topic (for example, "admin/#").</p>
   * @public
   */
  stringValues: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateDimensionResponse {
  /**
   * <p>A unique identifier for the dimension.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The Amazon Resource
   *       Name (ARN)of
   *       the created dimension.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The type of the dimension.</p>
   * @public
   */
  type?: DimensionType;

  /**
   * <p>The value or list of values used to scope the dimension. For example, for topic filters, this is the pattern used to match the MQTT topic name.</p>
   * @public
   */
  stringValues?: string[];

  /**
   * <p>The date and time, in milliseconds since epoch, when the dimension was initially created.</p>
   * @public
   */
  creationDate?: Date;

  /**
   * <p>The date and time, in milliseconds since epoch, when the dimension was most recently updated.</p>
   * @public
   */
  lastModifiedDate?: Date;
}

/**
 * @public
 */
export interface UpdateDomainConfigurationRequest {
  /**
   * <p>The name of the domain configuration to be updated.</p>
   * @public
   */
  domainConfigurationName: string | undefined;

  /**
   * <p>An object that specifies the authorization service for a domain.</p>
   * @public
   */
  authorizerConfig?: AuthorizerConfig;

  /**
   * <p>The status to which the domain configuration should be updated.</p>
   * @public
   */
  domainConfigurationStatus?: DomainConfigurationStatus;

  /**
   * <p>Removes the authorization configuration from a domain.</p>
   * @public
   */
  removeAuthorizerConfig?: boolean;

  /**
   * <p>An object that specifies the TLS configuration for a domain.</p>
   * @public
   */
  tlsConfig?: TlsConfig;

  /**
   * <p>The server certificate configuration.</p>
   * @public
   */
  serverCertificateConfig?: ServerCertificateConfig;
}

/**
 * @public
 */
export interface UpdateDomainConfigurationResponse {
  /**
   * <p>The name of the domain configuration that was updated.</p>
   * @public
   */
  domainConfigurationName?: string;

  /**
   * <p>The ARN of the domain configuration that was updated.</p>
   * @public
   */
  domainConfigurationArn?: string;
}

/**
 * @public
 */
export interface UpdateDynamicThingGroupRequest {
  /**
   * <p>The name of the dynamic thing group to update.</p>
   * @public
   */
  thingGroupName: string | undefined;

  /**
   * <p>The dynamic thing group properties to update.</p>
   * @public
   */
  thingGroupProperties: ThingGroupProperties | undefined;

  /**
   * <p>The expected version of the dynamic thing group to update.</p>
   * @public
   */
  expectedVersion?: number;

  /**
   * <p>The dynamic thing group index to update.</p>
   *          <note>
   *             <p>Currently one index is supported: <code>AWS_Things</code>.</p>
   *          </note>
   * @public
   */
  indexName?: string;

  /**
   * <p>The dynamic thing group search query string to update.</p>
   * @public
   */
  queryString?: string;

  /**
   * <p>The dynamic thing group query version to update.</p>
   *          <note>
   *             <p>Currently one query version is supported: "2017-09-30". If not specified, the
   * 				query version defaults to this value.</p>
   *          </note>
   * @public
   */
  queryVersion?: string;
}

/**
 * @public
 */
export interface UpdateDynamicThingGroupResponse {
  /**
   * <p>The dynamic thing group version.</p>
   * @public
   */
  version?: number;
}

/**
 * @public
 */
export interface UpdateEventConfigurationsRequest {
  /**
   * <p>The new event configuration values.</p>
   * @public
   */
  eventConfigurations?: Partial<Record<EventType, Configuration>>;
}

/**
 * @public
 */
export interface UpdateEventConfigurationsResponse {}

/**
 * @public
 */
export interface UpdateFleetMetricRequest {
  /**
   * <p>The name of the fleet metric to update.</p>
   * @public
   */
  metricName: string | undefined;

  /**
   * <p>The search query string.</p>
   * @public
   */
  queryString?: string;

  /**
   * <p>The type of the aggregation query.</p>
   * @public
   */
  aggregationType?: AggregationType;

  /**
   * <p>The time in seconds between fleet metric emissions. Range [60(1 min), 86400(1 day)] and must be multiple of 60.</p>
   * @public
   */
  period?: number;

  /**
   * <p>The field to aggregate.</p>
   * @public
   */
  aggregationField?: string;

  /**
   * <p>The description of the fleet metric.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The version of the query.</p>
   * @public
   */
  queryVersion?: string;

  /**
   * <p>The name of the index to search.</p>
   * @public
   */
  indexName: string | undefined;

  /**
   * <p>Used to support unit transformation such as milliseconds to seconds. The unit must be
   *       supported by <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_MetricDatum.html">CW metric</a>.</p>
   * @public
   */
  unit?: FleetMetricUnit;

  /**
   * <p>The expected version of the fleet metric record in the registry.</p>
   * @public
   */
  expectedVersion?: number;
}

/**
 * @public
 */
export interface UpdateIndexingConfigurationRequest {
  /**
   * <p>Thing indexing configuration.</p>
   * @public
   */
  thingIndexingConfiguration?: ThingIndexingConfiguration;

  /**
   * <p>Thing group indexing configuration.</p>
   * @public
   */
  thingGroupIndexingConfiguration?: ThingGroupIndexingConfiguration;
}

/**
 * @public
 */
export interface UpdateIndexingConfigurationResponse {}

/**
 * @public
 */
export interface UpdateJobRequest {
  /**
   * <p>The ID of the job to be updated.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>A short text description of the job.</p>
   * @public
   */
  description?: string;

  /**
   * <p>Configuration information for pre-signed S3 URLs.</p>
   * @public
   */
  presignedUrlConfig?: PresignedUrlConfig;

  /**
   * <p>Allows you to create a staged rollout of the job.</p>
   * @public
   */
  jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig;

  /**
   * <p>Allows you to create criteria to abort a job.</p>
   * @public
   */
  abortConfig?: AbortConfig;

  /**
   * <p>Specifies the amount of time each device has to finish its execution of the job. The timer is started when the job execution status is set to <code>IN_PROGRESS</code>.
   *             If the job execution status is not set to another terminal state before the time expires, it will be automatically set to <code>TIMED_OUT</code>. </p>
   * @public
   */
  timeoutConfig?: TimeoutConfig;

  /**
   * <p>The namespace used to indicate that a job is a customer-managed job.</p>
   *          <p>When you specify a value for this parameter, Amazon Web Services IoT Core sends jobs notifications to MQTT topics that
   *             contain the value in the following format.</p>
   *          <p>
   *             <code>$aws/things/<i>THING_NAME</i>/jobs/<i>JOB_ID</i>/notify-namespace-<i>NAMESPACE_ID</i>/</code>
   *          </p>
   *          <note>
   *             <p>The <code>namespaceId</code> feature is only supported by IoT Greengrass at
   *                 this time. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/setting-up.html">Setting
   *                     up IoT Greengrass core devices.</a>
   *             </p>
   *          </note>
   * @public
   */
  namespaceId?: string;

  /**
   * <p>Allows you to create the criteria to retry a job.</p>
   * @public
   */
  jobExecutionsRetryConfig?: JobExecutionsRetryConfig;
}

/**
 * @public
 */
export interface UpdateMitigationActionRequest {
  /**
   * <p>The friendly name for the mitigation action. You cannot change the name by using
   *         <code>UpdateMitigationAction</code>. Instead, you must delete and
   *       recreate the
   *       mitigation action with the new name.</p>
   * @public
   */
  actionName: string | undefined;

  /**
   * <p>The ARN of the IAM role that is used to apply the mitigation action.</p>
   * @public
   */
  roleArn?: string;

  /**
   * <p>Defines the type of action and the parameters for that action.</p>
   * @public
   */
  actionParams?: MitigationActionParams;
}

/**
 * @public
 */
export interface UpdateMitigationActionResponse {
  /**
   * <p>The ARN for the new mitigation action.</p>
   * @public
   */
  actionArn?: string;

  /**
   * <p>A unique identifier for the mitigation action.</p>
   * @public
   */
  actionId?: string;
}

/**
 * @public
 */
export interface UpdatePackageRequest {
  /**
   * <p>The name of the target software package.</p>
   * @public
   */
  packageName: string | undefined;

  /**
   * <p>The package description.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The name of the default package version.</p>
   *          <p>
   *             <b>Note:</b> You cannot name a <code>defaultVersion</code>
   *        and set <code>unsetDefaultVersion</code> equal to <code>true</code> at the same time.</p>
   * @public
   */
  defaultVersionName?: string;

  /**
   * <p>Indicates whether you want to remove the named default package version from the software package.
   *       Set as <code>true</code> to remove the default package version. </p>
   *          <p>
   *             <b>Note:</b> You cannot name a <code>defaultVersion</code>
   *        and set <code>unsetDefaultVersion</code> equal to <code>true</code> at the same time.</p>
   * @public
   */
  unsetDefaultVersion?: boolean;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request.
   *       Don't reuse this client token if a new idempotent request is required.</p>
   * @public
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface UpdatePackageResponse {}

/**
 * @public
 */
export interface UpdatePackageConfigurationRequest {
  /**
   * <p>Configuration to manage job's package version reporting. This updates the thing's reserved named shadow that the job targets.</p>
   * @public
   */
  versionUpdateByJobsConfig?: VersionUpdateByJobsConfig;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request.
   *       Don't reuse this client token if a new idempotent request is required.</p>
   * @public
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface UpdatePackageConfigurationResponse {}

/**
 * @public
 * @enum
 */
export const PackageVersionAction = {
  DEPRECATE: "DEPRECATE",
  PUBLISH: "PUBLISH",
} as const;

/**
 * @public
 */
export type PackageVersionAction = (typeof PackageVersionAction)[keyof typeof PackageVersionAction];

/**
 * @public
 */
export interface UpdatePackageVersionRequest {
  /**
   * <p>The name of the associated software package.</p>
   * @public
   */
  packageName: string | undefined;

  /**
   * <p>The name of the target package version.</p>
   * @public
   */
  versionName: string | undefined;

  /**
   * <p>The package version description.</p>
   * @public
   */
  description?: string;

  /**
   * <p>Metadata that can be used to define a package version’s configuration. For example, the Amazon S3 file location, configuration options that are being sent to the device or fleet. </p>
   *          <p>
   *             <b>Note:</b> Attributes can be updated only when the package version
   *       is in a draft state.</p>
   *          <p>The combined size of all the attributes on a package version is limited to 3KB.</p>
   * @public
   */
  attributes?: Record<string, string>;

  /**
   * <p>The various components that make up a software package version.</p>
   * @public
   */
  artifact?: PackageVersionArtifact;

  /**
   * <p>The status that the package version should be assigned. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/preparing-to-use-software-package-catalog.html#package-version-lifecycle">Package version lifecycle</a>.</p>
   * @public
   */
  action?: PackageVersionAction;

  /**
   * <p>The inline job document associated with a software package version used for a quick job
   *          deployment via IoT Jobs.</p>
   * @public
   */
  recipe?: string;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request.
   *       Don't reuse this client token if a new idempotent request is required.</p>
   * @public
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface UpdatePackageVersionResponse {}

/**
 * @public
 */
export interface UpdateProvisioningTemplateRequest {
  /**
   * <p>The name of the provisioning template.</p>
   * @public
   */
  templateName: string | undefined;

  /**
   * <p>The description of the provisioning template.</p>
   * @public
   */
  description?: string;

  /**
   * <p>True to enable the provisioning template, otherwise false.</p>
   * @public
   */
  enabled?: boolean;

  /**
   * <p>The ID of the default provisioning template version.</p>
   * @public
   */
  defaultVersionId?: number;

  /**
   * <p>The ARN of the role associated with the provisioning template. This IoT role grants
   *          permission to provision a device.</p>
   * @public
   */
  provisioningRoleArn?: string;

  /**
   * <p>Updates the pre-provisioning hook template. Only supports template of type
   *             <code>FLEET_PROVISIONING</code>. For more information about provisioning template types,
   *          see <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_CreateProvisioningTemplate.html#iot-CreateProvisioningTemplate-request-type">type</a>.</p>
   * @public
   */
  preProvisioningHook?: ProvisioningHook;

  /**
   * <p>Removes pre-provisioning hook template.</p>
   * @public
   */
  removePreProvisioningHook?: boolean;
}

/**
 * @public
 */
export interface UpdateProvisioningTemplateResponse {}

/**
 * @public
 */
export interface UpdateRoleAliasRequest {
  /**
   * <p>The role alias to update.</p>
   * @public
   */
  roleAlias: string | undefined;

  /**
   * <p>The role ARN.</p>
   * @public
   */
  roleArn?: string;

  /**
   * <p>The number of seconds the credential will be valid.</p>
   *          <p>This value must be less than or equal to the maximum session duration of the IAM role
   *          that the role alias references.</p>
   * @public
   */
  credentialDurationSeconds?: number;
}

/**
 * @public
 */
export interface UpdateRoleAliasResponse {
  /**
   * <p>The role alias.</p>
   * @public
   */
  roleAlias?: string;

  /**
   * <p>The role alias ARN.</p>
   * @public
   */
  roleAliasArn?: string;
}

/**
 * @public
 */
export interface UpdateScheduledAuditRequest {
  /**
   * <p>How often the scheduled audit takes
   *       place,
   *       either <code>DAILY</code>,
   *       <code>WEEKLY</code>, <code>BIWEEKLY</code>, or <code>MONTHLY</code>. The start time of each audit is determined by the
   *       system.</p>
   * @public
   */
  frequency?: AuditFrequency;

  /**
   * <p>The day of the month on which the scheduled audit takes place.
   *       This
   *       can
   *       be <code>1</code> through <code>31</code> or <code>LAST</code>. This field is required if the <code>frequency</code> parameter is set to
   *             <code>MONTHLY</code>. If days 29-31 are specified, and the month does not have that many days, the audit
   *       takes place on the "LAST" day of the month.</p>
   * @public
   */
  dayOfMonth?: string;

  /**
   * <p>The day of the week on which the scheduled audit takes place.
   *       This
   *       can
   *       be one of <code>SUN</code>, <code>MON</code>, <code>TUE</code>, <code>WED</code>, <code>THU</code>, <code>FRI</code>, or <code>SAT</code>. This field is required if the
   *             "frequency" parameter is set to <code>WEEKLY</code> or <code>BIWEEKLY</code>.</p>
   * @public
   */
  dayOfWeek?: DayOfWeek;

  /**
   * <p>Which checks are performed during the scheduled audit. Checks must be enabled
   *             for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list
   *             of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code>
   *             to select which checks are enabled.)</p>
   * @public
   */
  targetCheckNames?: string[];

  /**
   * <p>The name of the scheduled audit. (Max. 128 chars)</p>
   * @public
   */
  scheduledAuditName: string | undefined;
}

/**
 * @public
 */
export interface UpdateScheduledAuditResponse {
  /**
   * <p>The ARN of the scheduled audit.</p>
   * @public
   */
  scheduledAuditArn?: string;
}

/**
 * @public
 */
export interface UpdateSecurityProfileRequest {
  /**
   * <p>The name of the security profile you want to update.</p>
   * @public
   */
  securityProfileName: string | undefined;

  /**
   * <p>A description of the security profile.</p>
   * @public
   */
  securityProfileDescription?: string;

  /**
   * <p>Specifies the behaviors that, when violated by a device (thing), cause an alert.</p>
   * @public
   */
  behaviors?: Behavior[];

  /**
   * <p>Where the alerts are sent. (Alerts are always sent to the console.)</p>
   * @public
   */
  alertTargets?: Partial<Record<AlertTargetType, AlertTarget>>;

  /**
   * @deprecated
   *
   * <p>
   *             <i>Please use
   *           <a>UpdateSecurityProfileRequest$additionalMetricsToRetainV2</a>
   *         instead.</i>
   *          </p>
   *          <p>A list of metrics
   *      whose data is retained (stored). By default, data is retained for any metric
   *       used in the profile's <code>behaviors</code>, but
   *       it is
   *       also retained for any metric specified here. Can be used with custom metrics; cannot be used with dimensions.</p>
   * @public
   */
  additionalMetricsToRetain?: string[];

  /**
   * <p>A list of metrics whose data is retained (stored). By default, data is retained for any metric used in the profile's behaviors, but it is also retained for any metric specified here. Can be used with custom metrics; cannot be used with dimensions.</p>
   * @public
   */
  additionalMetricsToRetainV2?: MetricToRetain[];

  /**
   * <p>If true, delete all <code>behaviors</code> defined for this security profile.
   *         If any <code>behaviors</code> are defined in the current invocation, an exception occurs.</p>
   * @public
   */
  deleteBehaviors?: boolean;

  /**
   * <p>If true, delete all <code>alertTargets</code> defined for this security profile.
   *         If any <code>alertTargets</code> are defined in the current invocation, an exception occurs.</p>
   * @public
   */
  deleteAlertTargets?: boolean;

  /**
   * <p>If true, delete all <code>additionalMetricsToRetain</code> defined for this
   *         security profile. If any <code>additionalMetricsToRetain</code> are defined in the current
   *         invocation, an exception occurs.</p>
   * @public
   */
  deleteAdditionalMetricsToRetain?: boolean;

  /**
   * <p>The expected version of the security profile. A new version is generated whenever
   *         the security profile is updated. If you specify a value that is different from the actual
   *         version, a <code>VersionConflictException</code> is thrown.</p>
   * @public
   */
  expectedVersion?: number;

  /**
   * <p>Specifies the MQTT topic and role ARN required for metric export.</p>
   * @public
   */
  metricsExportConfig?: MetricsExportConfig;

  /**
   * <p>Set the value as true to delete metrics export related configurations.</p>
   * @public
   */
  deleteMetricsExportConfig?: boolean;
}

/**
 * @public
 */
export interface UpdateSecurityProfileResponse {
  /**
   * <p>The name of the security profile that was updated.</p>
   * @public
   */
  securityProfileName?: string;

  /**
   * <p>The ARN of the security profile that was updated.</p>
   * @public
   */
  securityProfileArn?: string;

  /**
   * <p>The description of the security profile.</p>
   * @public
   */
  securityProfileDescription?: string;

  /**
   * <p>Specifies the behaviors that, when violated by a device (thing), cause an alert.</p>
   * @public
   */
  behaviors?: Behavior[];

  /**
   * <p>Where the alerts are sent. (Alerts are always sent to the console.)</p>
   * @public
   */
  alertTargets?: Partial<Record<AlertTargetType, AlertTarget>>;

  /**
   * @deprecated
   *
   * <p>
   *             <i>Please use
   *           <a>UpdateSecurityProfileResponse$additionalMetricsToRetainV2</a>
   *         instead.</i>
   *          </p>
   *          <p>A list of metrics
   *       whose data is retained (stored). By default, data is retained for any metric
   *       used in the security profile's <code>behaviors</code>, but
   *       it is
   *       also retained for any metric specified here.</p>
   * @public
   */
  additionalMetricsToRetain?: string[];

  /**
   * <p>A list of metrics whose data is retained (stored). By default, data is retained for any metric used in the profile's behaviors, but it is also retained for any metric specified here. Can be used with custom metrics; cannot be used with dimensions.</p>
   * @public
   */
  additionalMetricsToRetainV2?: MetricToRetain[];

  /**
   * <p>The updated version of the security profile.</p>
   * @public
   */
  version?: number;

  /**
   * <p>The time the security profile was created.</p>
   * @public
   */
  creationDate?: Date;

  /**
   * <p>The time the security profile was last modified.</p>
   * @public
   */
  lastModifiedDate?: Date;

  /**
   * <p>Specifies the MQTT topic and role ARN required for metric export.</p>
   * @public
   */
  metricsExportConfig?: MetricsExportConfig;
}

/**
 * @public
 */
export interface UpdateStreamRequest {
  /**
   * <p>The stream ID.</p>
   * @public
   */
  streamId: string | undefined;

  /**
   * <p>The description of the stream.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The files associated with the stream.</p>
   * @public
   */
  files?: StreamFile[];

  /**
   * <p>An IAM role that allows the IoT service principal assumes to access your S3 files.</p>
   * @public
   */
  roleArn?: string;
}

/**
 * @public
 */
export interface UpdateStreamResponse {
  /**
   * <p>The stream ID.</p>
   * @public
   */
  streamId?: string;

  /**
   * <p>The stream ARN.</p>
   * @public
   */
  streamArn?: string;

  /**
   * <p>A description of the stream.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The stream version.</p>
   * @public
   */
  streamVersion?: number;
}

/**
 * <p>The input for the UpdateThing operation.</p>
 * @public
 */
export interface UpdateThingRequest {
  /**
   * <p>The name of the thing to update.</p>
   *          <p>You can't change a thing's name. To change a thing's name, you must create a
   * 			new thing, give it the new name, and then delete the old thing.</p>
   * @public
   */
  thingName: string | undefined;

  /**
   * <p>The name of the thing type.</p>
   * @public
   */
  thingTypeName?: string;

  /**
   * <p>A list of thing attributes, a JSON string containing name-value pairs. For
   * 			example:</p>
   *          <p>
   *             <code>\{\"attributes\":\{\"name1\":\"value2\"\}\}</code>
   *          </p>
   *          <p>This data is used to add new attributes or update existing attributes.</p>
   * @public
   */
  attributePayload?: AttributePayload;

  /**
   * <p>The expected version of the thing record in the registry. If the version of the
   * 			record in the registry does not match the expected version specified in the request, the
   * 				<code>UpdateThing</code> request is rejected with a
   * 				<code>VersionConflictException</code>.</p>
   * @public
   */
  expectedVersion?: number;

  /**
   * <p>Remove a thing type association. If <b>true</b>, the
   * 			association is removed.</p>
   * @public
   */
  removeThingType?: boolean;
}

/**
 * <p>The output from the UpdateThing operation.</p>
 * @public
 */
export interface UpdateThingResponse {}

/**
 * @public
 */
export interface UpdateThingGroupRequest {
  /**
   * <p>The thing group to update.</p>
   * @public
   */
  thingGroupName: string | undefined;

  /**
   * <p>The thing group properties.</p>
   * @public
   */
  thingGroupProperties: ThingGroupProperties | undefined;

  /**
   * <p>The expected version of the thing group. If this does not match the version of the
   * 			thing group being updated, the update will fail.</p>
   * @public
   */
  expectedVersion?: number;
}

/**
 * @public
 */
export interface UpdateThingGroupResponse {
  /**
   * <p>The version of the updated thing group.</p>
   * @public
   */
  version?: number;
}

/**
 * @public
 */
export interface UpdateThingGroupsForThingRequest {
  /**
   * <p>The thing whose group memberships will be updated.</p>
   * @public
   */
  thingName?: string;

  /**
   * <p>The groups to which the thing will be added.</p>
   * @public
   */
  thingGroupsToAdd?: string[];

  /**
   * <p>The groups from which the thing will be removed.</p>
   * @public
   */
  thingGroupsToRemove?: string[];

  /**
   * <p>Override dynamic thing groups with static thing groups when 10-group limit is
   * 			reached. If a thing belongs to 10 thing groups, and one or more of those groups are
   * 			dynamic thing groups, adding a thing to a static group removes the thing from the last
   * 			dynamic group.</p>
   * @public
   */
  overrideDynamicGroups?: boolean;
}

/**
 * @public
 */
export interface UpdateThingGroupsForThingResponse {}

/**
 * @public
 */
export interface UpdateTopicRuleDestinationRequest {
  /**
   * <p>The ARN of the topic rule destination.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The status of the topic rule destination. Valid values are:</p>
   *          <dl>
   *             <dt>IN_PROGRESS</dt>
   *             <dd>
   *                <p>A topic rule destination was created but has not been confirmed. You can set
   *                      <code>status</code> to <code>IN_PROGRESS</code> by calling
   *                      <code>UpdateTopicRuleDestination</code>. Calling
   *                      <code>UpdateTopicRuleDestination</code> causes a new confirmation challenge to
   *                   be sent to your confirmation endpoint.</p>
   *             </dd>
   *             <dt>ENABLED</dt>
   *             <dd>
   *                <p>Confirmation was completed, and traffic to this destination is allowed. You can
   *                   set <code>status</code> to <code>DISABLED</code> by calling
   *                      <code>UpdateTopicRuleDestination</code>.</p>
   *             </dd>
   *             <dt>DISABLED</dt>
   *             <dd>
   *                <p>Confirmation was completed, and traffic to this destination is not allowed. You
   *                   can set <code>status</code> to <code>ENABLED</code> by calling
   *                      <code>UpdateTopicRuleDestination</code>.</p>
   *             </dd>
   *             <dt>ERROR</dt>
   *             <dd>
   *                <p>Confirmation could not be completed, for example if the confirmation timed out.
   *                   You can call <code>GetTopicRuleDestination</code> for details about the error. You
   *                   can set <code>status</code> to <code>IN_PROGRESS</code> by calling
   *                      <code>UpdateTopicRuleDestination</code>. Calling
   *                      <code>UpdateTopicRuleDestination</code> causes a new confirmation challenge to
   *                   be sent to your confirmation endpoint.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  status: TopicRuleDestinationStatus | undefined;
}

/**
 * @public
 */
export interface UpdateTopicRuleDestinationResponse {}

/**
 * @public
 */
export interface ValidateSecurityProfileBehaviorsRequest {
  /**
   * <p>Specifies the behaviors that, when violated by a device (thing), cause an alert.</p>
   * @public
   */
  behaviors: Behavior[] | undefined;
}

/**
 * <p>Information about an error found in a behavior specification.</p>
 * @public
 */
export interface ValidationError {
  /**
   * <p>The description of an error found in the behaviors.</p>
   * @public
   */
  errorMessage?: string;
}

/**
 * @public
 */
export interface ValidateSecurityProfileBehaviorsResponse {
  /**
   * <p>True if the behaviors were valid.</p>
   * @public
   */
  valid?: boolean;

  /**
   * <p>The list of any errors found in the behaviors.</p>
   * @public
   */
  validationErrors?: ValidationError[];
}

/**
 * @internal
 */
export const UpdatePackageRequestFilterSensitiveLog = (obj: UpdatePackageRequest): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdatePackageVersionRequestFilterSensitiveLog = (obj: UpdatePackageVersionRequest): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.attributes && { attributes: SENSITIVE_STRING }),
  ...(obj.recipe && { recipe: SENSITIVE_STRING }),
});
