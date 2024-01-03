import { Controller, Get, Post, Body, BadRequestException, Param, Put, NotFoundException, Delete } from '@nestjs/common';
import { Audit } from './audit.entity';
import { Database } from './database.service';

@Controller()
export class AppController {
  constructor(private readonly database: Database) {} // Injizieren Sie die Database-Klasse

  @Get()
  findAll(): Promise<Audit[]> {
    return this.database.findAll(); // Verwenden Sie die findAll-Methode der Database-Klasse
  }

  @Post()
    create(@Body() body): Promise<Audit> {
      if (!body.url) {
        throw new BadRequestException('URL is require'); // Werfen Sie einen Fehler, wenn keine URL übergeben wurde
      }
      const audit = new Audit(); // Erstellen Sie ein neues Audit-Objekt
      audit.url = body.url; // Setzen Sie die Eigenschaften des Audit-Objekts basierend auf den Daten, die Sie erhalten
      return this.database.create(audit); // Verwenden Sie die create-Methode der Database-Klasse, um das Audit-Objekt zu speichern
    }

    @Put(':id')
    async update(@Param('id') id, @Body() body): Promise<Audit> {
      const audit = await this.database.findOne(id); // Verwenden Sie die findOne-Methode der Database-Klasse, um das Audit-Objekt zu finden
      if(!audit){
        throw new NotFoundException('Audit not found'); // Werfen Sie einen Fehler, wenn kein Audit-Objekt gefunden wurde
      }
      audit.url = body.url || audit.url; // Setzen Sie die Eigenschaften des Audit-Objekts basierend auf den Daten, die Sie erhalten
      return this.database.update(audit); // Verwenden Sie die update-Methode der Database-Klasse, um das Audit-Objekt zu speichern
    }

    @Delete(':customerID')
    async this.delete(@Param('customerID') id: string): Promise<void> {
     const audit = await this.database.findOne(customerID); // Verwenden Sie die findOne-Methode der Database-Klasse, um das Audit-Objekt zu finden
     if(!audit){
       throw new NotFoundException('Audit not found'); // Werfen Sie einen Fehler, wenn kein Audit-Objekt gefunden wurde
     }
      await this.database.delete(audit); // Verwenden Sie die delete-Methode der Database-Klasse, um das Audit-Objekt zu löschen
    }

  }
