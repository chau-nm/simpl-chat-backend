import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1713430320959 implements MigrationInterface {
    name = 'Init1713430320959'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`message\` (\`id\` int NOT NULL AUTO_INCREMENT, \`content\` varchar(255) NOT NULL, \`createAt\` int NOT NULL, \`updateAt\` int NOT NULL, \`roomId\` int NULL, \`senderId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`message\` ADD CONSTRAINT \`FK_fdfe54a21d1542c564384b74d5c\` FOREIGN KEY (\`roomId\`) REFERENCES \`room\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`message\` ADD CONSTRAINT \`FK_bc096b4e18b1f9508197cd98066\` FOREIGN KEY (\`senderId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`message\` DROP FOREIGN KEY \`FK_bc096b4e18b1f9508197cd98066\``);
        await queryRunner.query(`ALTER TABLE \`message\` DROP FOREIGN KEY \`FK_fdfe54a21d1542c564384b74d5c\``);
        await queryRunner.query(`DROP TABLE \`message\``);
    }

}
