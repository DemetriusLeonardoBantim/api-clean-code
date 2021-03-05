import { AddAccountModel } from '../../domain/usecases/add-account'
import { AccountModel } from '../../domain/models/account'

export interface LogErrorRepository {
  log(stack: string): Promise<void>
}
