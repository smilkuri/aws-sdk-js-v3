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
import {
  GetCollaborationConfiguredAudienceModelAssociationInput,
  GetCollaborationConfiguredAudienceModelAssociationOutput,
} from "../models/models_0";
import {
  de_GetCollaborationConfiguredAudienceModelAssociationCommand,
  se_GetCollaborationConfiguredAudienceModelAssociationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetCollaborationConfiguredAudienceModelAssociationCommand}.
 */
export interface GetCollaborationConfiguredAudienceModelAssociationCommandInput
  extends GetCollaborationConfiguredAudienceModelAssociationInput {}
/**
 * @public
 *
 * The output of {@link GetCollaborationConfiguredAudienceModelAssociationCommand}.
 */
export interface GetCollaborationConfiguredAudienceModelAssociationCommandOutput
  extends GetCollaborationConfiguredAudienceModelAssociationOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a configured audience model association within a collaboration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, GetCollaborationConfiguredAudienceModelAssociationCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, GetCollaborationConfiguredAudienceModelAssociationCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * const client = new CleanRoomsClient(config);
 * const input = { // GetCollaborationConfiguredAudienceModelAssociationInput
 *   collaborationIdentifier: "STRING_VALUE", // required
 *   configuredAudienceModelAssociationIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetCollaborationConfiguredAudienceModelAssociationCommand(input);
 * const response = await client.send(command);
 * // { // GetCollaborationConfiguredAudienceModelAssociationOutput
 * //   collaborationConfiguredAudienceModelAssociation: { // CollaborationConfiguredAudienceModelAssociation
 * //     id: "STRING_VALUE", // required
 * //     arn: "STRING_VALUE", // required
 * //     collaborationId: "STRING_VALUE", // required
 * //     collaborationArn: "STRING_VALUE", // required
 * //     configuredAudienceModelArn: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     description: "STRING_VALUE",
 * //     creatorAccountId: "STRING_VALUE", // required
 * //     createTime: new Date("TIMESTAMP"), // required
 * //     updateTime: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetCollaborationConfiguredAudienceModelAssociationCommandInput - {@link GetCollaborationConfiguredAudienceModelAssociationCommandInput}
 * @returns {@link GetCollaborationConfiguredAudienceModelAssociationCommandOutput}
 * @see {@link GetCollaborationConfiguredAudienceModelAssociationCommandInput} for command's `input` shape.
 * @see {@link GetCollaborationConfiguredAudienceModelAssociationCommandOutput} for command's `response` shape.
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
export class GetCollaborationConfiguredAudienceModelAssociationCommand extends $Command<
  GetCollaborationConfiguredAudienceModelAssociationCommandInput,
  GetCollaborationConfiguredAudienceModelAssociationCommandOutput,
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
  constructor(readonly input: GetCollaborationConfiguredAudienceModelAssociationCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CleanRoomsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetCollaborationConfiguredAudienceModelAssociationCommandInput,
    GetCollaborationConfiguredAudienceModelAssociationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        GetCollaborationConfiguredAudienceModelAssociationCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CleanRoomsClient";
    const commandName = "GetCollaborationConfiguredAudienceModelAssociationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSBastionControlPlaneServiceLambda",
        operation: "GetCollaborationConfiguredAudienceModelAssociation",
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
    input: GetCollaborationConfiguredAudienceModelAssociationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetCollaborationConfiguredAudienceModelAssociationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetCollaborationConfiguredAudienceModelAssociationCommandOutput> {
    return de_GetCollaborationConfiguredAudienceModelAssociationCommand(output, context);
  }
}
