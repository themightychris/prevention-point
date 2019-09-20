# Generated by Django 2.2.2 on 2019-08-28 00:19

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0008_program_is_closed'),
    ]

    operations = [
        migrations.CreateModel(
            name='ProgramAvailability',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('day_of_week', models.CharField(max_length=10)),
                ('start_time', models.DateField()),
                ('end_time', models.DateField()),
                ('program_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.Program')),
            ],
        ),
    ]