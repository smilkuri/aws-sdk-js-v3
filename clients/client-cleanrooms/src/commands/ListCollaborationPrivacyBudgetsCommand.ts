// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { ListCollaborationPrivacyBudgetsInput, ListCollaborationPrivacyBudgetsOutput } from "../models/models_0";
import {
  de_ListCollaborationPrivacyBudgetsCommand,
  se_ListCollaborationPrivacyBudgetsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListCollaborationPrivacyBudgetsCommand}.
 */
export interface ListCollaborationPrivacyBudgetsCommandInput extends ListCollaborationPrivacyBudgetsInput {}
/**
 * @public
 *
 * The output of {@link ListCollaborationPrivacyBudgetsCommand}.
 */
export interface ListCollaborationPrivacyBudgetsCommandOutput
  extends ListCollaborationPrivacyBudgetsOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns an array that summarizes each privacy budget in a specified collaboration. The summary includes the collaboration ARN, creation time, creating account, and privacy budget details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, ListCollaborationPrivacyBudgetsCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, ListCollaborationPrivacyBudgetsCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * const client = new CleanRoomsClient(config);
 * const input = { // ListCollaborationPrivacyBudgetsInput
 *   collaborationIdentifier: "STRING_VALUE", // required
 *   privacyBudgetType: "DIFFERENTIAL_PRIVACY", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListCollaborationPrivacyBudgetsCommand(input);
 * const response = await client.send(command);
 * // { // ListCollaborationPrivacyBudgetsOutput
 * //   collaborationPrivacyBudgetSummaries: [ // CollaborationPrivacyBudgetSummaryList // required
 * //     { // CollaborationPrivacyBudgetSummary
 * //       id: "STRING_VALUE", // required
 * //       privacyBudgetTemplateId: "STRING_VALUE", // required
 * //       privacyBudgetTemplateArn: "STRING_VALUE", // required
 * //       collaborationId: "STRING_VALUE", // required
 * //       collaborationArn: "STRING_VALUE", // required
 * //       creatorAccountId: "STRING_VALUE", // required
 * //       type: "DIFFERENTIAL_PRIVACY", // required
 * //       createTime: new Date("TIMESTAMP"), // required
 * //       updateTime: new Date("TIMESTAMP"), // required
 * //       budget: { // PrivacyBudget Union: only one key present
 * //         differentialPrivacy: { // DifferentialPrivacyPrivacyBudget
 * //           aggregations: [ // DifferentialPrivacyPrivacyBudgetAggregationList // required
 * //             { // DifferentialPrivacyPrivacyBudgetAggregation
 * //               type: "AVG" || "COUNT" || "COUNT_DISTINCT" || "SUM" || "STDDEV", // required
 * //               maxCount: Number("int"), // required
 * //               remainingCount: Number("int"), // required
 * //             },
 * //           ],
 * //           epsilon: Number("int"), // required
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCollaborationPrivacyBudgetsCommandInput - {@link ListCollaborationPrivacyBudgetsCommandInput}
 * @returns {@link ListCollaborationPrivacyBudgetsCommandOutput}
 * @see {@link ListCollaborationPrivacyBudgetsCommandInput} for command's `input` shape.
 * @see {@link ListCollaborationPrivacyBudgetsCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Caller does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the specified constraints.</p>
 *
 * @throws {@link CleanRoomsServiceException}
 * <p>Base exception class for all service exceptions from CleanRooms service.</p>
 *
 */
export class ListCollaborationPrivacyBudgetsCommand extends $Command<
  ListCollaborationPrivacyBudgetsCommandInput,
  ListCollaborationPrivacyBudgetsCommandOutput,
  CleanRoomsClientResolvedConfig
> {
  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: ListCollaborationPrivacyBudgetsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CleanRoomsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListCollaborationPrivacyBudgetsCommandInput, ListCollaborationPrivacyBudgetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListCollaborationPrivacyBudgetsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CleanRoomsClient";
    const commandName = "ListCollaborationPrivacyBudgetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSBastionControlPlaneServiceLambda",
        operation: "ListCollaborationPrivacyBudgets",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(
    input: ListCollaborationPrivacyBudgetsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListCollaborationPrivacyBudgetsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListCollaborationPrivacyBudgetsCommandOutput> {
    return de_ListCollaborationPrivacyBudgetsCommand(output, context);
  }
}
